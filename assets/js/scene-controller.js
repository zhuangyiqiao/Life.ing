// This module owns illustration layers only; tasks, audio and timers stay outside.
export function catState(timer) {
  if (timer.state === 'completed') return 'completed';
  if (timer.state !== 'running') return 'idle';
  return timer.mode === 'focus' ? 'focus' : 'rest';
}

export class SceneController {
  constructor(host) {
    this.host = host;
    this.current = null;
    this.key = null;
    this.animations = [];
    this.curtainsOpen = false;
    this.motion = true;
    this.reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    this.onMotionChange = () => this.setMotion(this.motion);
    this.reducedMotion.addEventListener('change', this.onMotionChange);
  }

  settle() {
    this.animations.forEach(animation => animation.cancel());
    this.animations = [];
    for (const layer of [...this.host.children]) {
      if (layer !== this.current) layer.remove();
    }
    if (this.current) {
      this.current.style.opacity = '1';
      this.current.removeAttribute('aria-hidden');
    }
  }

  setMotion(enabled) {
    this.motion = enabled;
    if (!enabled || this.reducedMotion.matches) this.settle();
  }

  async show(key, svg) {
    if (key === this.key) return;
    this.settle();
    const previous = this.current;
    const next = document.createElement('div');
    next.className = 'scene-layer';
    next.innerHTML = svg; // Only authored SVG from scenes.js enters here.
    const curtain = next.querySelector('.cafe-curtain-toggle');
    if (curtain) {
      const updateCurtain = () => {
        const label = this.curtainsOpen ? '合上窗帘' : '拉开窗帘';
        next.classList.toggle('curtains-open', this.curtainsOpen);
        curtain.setAttribute('aria-pressed', String(this.curtainsOpen));
        curtain.title = label;
        curtain.firstElementChild.textContent = label;
      };
      updateCurtain();
      curtain.addEventListener('click', () => {
        this.curtainsOpen = !this.curtainsOpen;
        updateCurtain();
      });
    }
    this.host.append(next);
    this.current = next;
    this.key = key;
    if (!previous) return;
    previous.inert = true;
    previous.setAttribute('aria-hidden', 'true');

    if (!this.motion || this.reducedMotion.matches || !next.animate) {
      this.settle();
      return;
    }
    const options = { duration: 320, easing: 'ease-in-out' };
    const animations = [
      next.animate([{ opacity: 0 }, { opacity: 1 }], options),
      previous.animate([{ opacity: 1 }, { opacity: 0 }], options)
    ];
    this.animations = animations;
    await Promise.allSettled(animations.map(animation => animation.finished));
    if (this.current === next) this.settle();
  }
}
