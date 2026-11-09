import { SCENE_SOUND_PLANS } from './sound-catalog.js';
export const CATS = [ { id:'black', name:'小黑', color:'#737b62' }, { id:'coal', name:'煤球', color:'#464b42' }, { id:'cream', name:'奶糖', color:'#d6c6a9' }, { id:'orange', name:'橘子', color:'#c79366' } ];
// Cat anchors are foot positions in the shared SVG coordinate system.
export const SCENE_LAYOUTS = {
  cafe: { cat: { x: 450, y: 482, scale: .8 }, perch: '沙发坐垫' },
  'rainy-room': { cat: { x: 465, y: 478, scale: .65 }, perch: '书桌软垫' },
  'sunny-beach': { cat: { x: 459, y: 542, scale: .75 }, perch: '秋千椅坐垫' },
  campfire: { cat: { x: 385, y: 515, scale: .75 }, perch: '帐篷口软垫' }
};
export const SCENES=Object.entries(SCENE_SOUND_PLANS).map(([id,plan])=>({id,name:plan.label,tracks:plan.tracks,...SCENE_LAYOUTS[id]}));
// Original line illustration, authored as SVG to stay crisp at every viewport size.
// A new window-lounge composition: upholstered banquette, cushions, low tables and plants.
// Inspired by Peet's seating materials and proportions, not the previous reference illustration.
const cafe = `<g class="window-architecture">
<rect x="74" y="56" width="482" height="318" rx="3" class="glass-fill"/>
<path d="M84 66H546V361H84Z M233 66V361 M244 66V361 M397 66V361 M408 66V361 M84 278H546 M84 288H546 M67 374H563V385H67Z"/>
<g class="faint"><path d="M98 231L120 214H161V260 M177 260V188H217 M260 260V210L287 188L311 210V260 M325 260V170H375V260 M425 260V201H449L464 183H493V260 M506 260V218H534"/><path d="M112 243H148 M188 205H207 M335 188H361 M335 205H361 M435 220H449 M477 207H488"/></g>
<path d="M100 94Q120 78 140 94 M272 130Q285 119 300 130" class="faint"/>
</g>
<g aria-hidden="true">
<path class="cafe-window-light" d="M85 67H546V311H85Z"/>
<path d="M63 44H567 M63 40V48 M567 40V48"/>
${cafeCurtain('translate(78 46)')}${cafeCurtain('translate(552 46) scale(-1 1)')}
</g>
<g class="lounge-lamp"><path d="M455 12V104 M449 12H461 M425 104Q456 78 487 104L498 142H414Z"/><path d="M420 145H492"/><ellipse cx="456" cy="144" rx="30" ry="5" class="olive-fill"/></g>
<g class="sofa">
<path class="sofa-fill" d="M103 341Q99 316 125 313H508Q535 316 535 342V457L506 489H120L93 456Z"/>
<path d="M116 333H251Q260 333 260 346V438H111 M271 333H402Q413 333 413 346V438H271 M425 333H510Q520 333 520 347V438H425"/>
<path class="paper-fill" d="M107 437H518L536 482L510 510H113L90 482Z"/>
<path class="sofa-fill" d="M104 446H258L265 486H111Z M267 446H410L417 486H272Z M420 446H510L526 479L510 486H427Z"/>
<path class="sofa-fill" d="M82 389Q81 375 96 375H112Q124 375 124 390V498L107 528H81Z M507 390Q507 376 521 376H541Q556 376 556 391V511L536 531H507Z"/>
<path d="M81 528H535V551H81Z M96 551V571H108V551 M517 551V571H529V551 M81 509H107 M516 511H545"/>
<path class="pillow-fill" d="M143 352Q147 342 158 345L214 363Q224 367 220 379L204 422Q201 431 190 427L137 411Q126 408 132 397Z"/>
<path class="faint" d="M154 352L147 405 M171 357L163 411 M188 362L180 417 M204 367L196 421 M139 373L212 396 M135 389L206 411"/>
<path class="pillow-fill" d="M438 351Q447 345 455 352L494 382Q502 390 494 398L466 427Q459 433 451 427L415 397Q407 390 413 381Z"/>
<path d="M427 381L468 415 M438 369L481 402" class="faint"/>
</g>
<g class="coffee-tables">
<path d="M220 579V682 M230 579V682 M194 691Q224 674 254 691 M194 691V697H254V691"/>
<ellipse class="paper-fill" cx="224" cy="561" rx="102" ry="34"/><path d="M122 561V570C137 611 310 611 326 570V561"/>
<path class="paper-fill" d="M158 548L199 536L230 549L188 561Z M158 548V555L188 568L230 556V549 M188 561V568"/>
<ellipse class="paper-fill" cx="269" cy="551" rx="25" ry="7"/><path class="paper-fill" d="M252 523L256 545Q269 555 280 543L285 523Z"/><ellipse cx="269" cy="523" rx="17" ry="5" class="paper-fill"/><ellipse cx="269" cy="523" rx="12" ry="3" class="coffee-fill"/><path d="M284 527Q303 520 298 536Q292 545 282 539"/>
<g class="steam faint"><path d="M264 508C252 498 273 488 264 478 M275 508C267 497 286 491 278 481"/></g>
<ellipse class="paper-fill" cx="487" cy="586" rx="57" ry="20"/><path d="M430 586V592Q484 624 544 592V586 M480 608V676 M490 608V676 M460 683Q485 672 512 683 M460 683V688H512V683"/>
</g>
<g class="window-plant"><path class="paper-fill" d="M30 504H77L71 569Q52 578 37 569Z"/><path d="M35 513H72 M52 505V414 M52 466Q20 463 18 438Q46 434 52 466 M54 446Q80 441 85 414Q58 411 54 446 M51 431Q25 429 27 403Q50 407 51 431 M54 487Q80 483 87 458Q59 456 54 487"/></g>
<g class="faint"><path d="M35 615L587 644 M50 641L570 670 M106 590L82 680 M371 618L398 699"/></g>`;
function cafeCurtain(transform) {
  return `<g transform="${transform}"><g class="cafe-curtain-fold"><g class="cafe-curtain-cloth">
    <path class="cafe-curtain-fabric" vector-effect="non-scaling-stroke" d="M0 0 Q20 9 39 0 Q58 9 78 0 Q98 9 117 0 Q137 9 156 0 Q176 9 195 0 Q217 9 237 0 C230 100 238 182 235 259 Q215 271 194 260 Q174 272 154 261 Q134 271 114 260 Q94 272 74 261 Q54 270 35 260 Q16 269 0 259 C7 172 5 87 0 0Z"/>
    <path class="cafe-curtain-seams" vector-effect="non-scaling-stroke" d="M39 0Q49 123 35 260 M78 0Q90 129 74 261 M117 0Q125 132 114 260 M156 0Q165 128 154 261 M195 0Q200 119 194 260"/>
  </g></g></g>`;
}
const cafeCurtainControl = `<foreignObject x="68" y="42" width="494" height="274"><button xmlns="http://www.w3.org/1999/xhtml" class="cafe-curtain-toggle" type="button" aria-label="拉开窗帘" aria-pressed="false" title="拉开窗帘"><span aria-hidden="true">拉开窗帘</span></button></foreignObject>`;
const rainy = `<path d="M75 65H550V400H75Z M87 78H538V387H87Z M310 78V387 M322 78V387 M87 250H538"/><g class="faint"><path d="M112 346V274H156V346 M170 346V230H219V346 M351 346V275H400V346 M440 346V215H484V346"/></g><g class="rain-lines faint">${Array.from({length:22},(_,i)=>`<path d="M${105+i*19} ${90+(i%4)*41}l-8 27 M${105+i*19} ${270+(i%3)*23}l-8 27"/>`).join('')}</g><path d="M110 460H540L563 485H87Z M105 485V695H119V485 M520 485V695H534V485 M120 541H520"/><path class="paper-fill" d="M217 317H430V443H217Z M225 326H422V434H225Z M307 443V460 M276 460H362 M254 476H396"/><path d="M142 451V267L182 230 M163 224L195 249L211 225L183 202Z M130 451H165"/>`;
const beach = `<g class="beach-horizon faint"><circle cx="515" cy="105" r="33"/><path d="M44 318Q135 306 225 318T405 318T594 318 M44 335Q135 323 225 335T405 335T594 335 M40 400Q150 370 255 398T466 398T596 398 M45 457Q154 430 260 453T470 453T595 453"/><path d="M357 105q13-12 26 0q13-12 26 0 M79 285q11-10 22 0q11-10 22 0"/></g>
<g class="coconut-palm"><path class="sofa-fill" d="M106 652Q173 442 173 208L195 204Q208 443 139 652Z"/><path class="faint" d="M118 618L149 625 M130 577L160 584 M143 533L172 540 M153 489L184 496 M163 443L192 450 M170 397L197 403 M175 352L200 358 M178 307L201 313 M178 263L199 269"/>
<g class="pillow-fill"><path d="M185 211Q112 100 42 165Q112 153 185 211Z M185 211Q69 191 40 270Q107 213 185 211Z M185 211Q139 77 203 59Q179 124 185 211Z M185 211Q235 78 313 130Q244 133 185 211Z M185 211Q292 160 331 240Q262 205 185 211Z M185 211Q249 223 260 304Q222 249 185 211Z"/></g><path d="M185 211Q116 134 54 160 M185 211Q106 201 48 259 M185 211Q162 113 198 70 M185 211Q246 115 301 129 M185 211Q269 183 320 231 M185 211Q237 245 256 291"/><ellipse class="sofa-fill" cx="177" cy="223" rx="13" ry="17"/><ellipse class="sofa-fill" cx="199" cy="226" rx="12" ry="16"/></g>
<g class="seaside-swing"><path class="paper-fill" d="M280 185H567V201H280Z M304 201L263 646H279L320 201Z M529 201L571 646H587L545 201Z"/><path d="M327 201V491 M337 201V491 M501 201V491 M511 201V491"/>
<path class="paper-fill" d="M319 487Q319 420 352 407H481Q515 420 515 487V535H319Z"/><path class="faint" d="M345 429V504 M366 420V504 M387 418V504 M408 418V504 M429 418V504 M450 418V504 M471 420V504 M492 429V504"/>
<path class="pillow-fill" d="M348 465Q338 455 347 442L371 420Q379 413 389 421L416 446Q424 455 415 465L391 488Z"/><path d="M357 446L397 469" class="faint"/>
<path class="sofa-fill" d="M315 512Q415 491 519 512L529 540Q417 568 306 540Z"/><path class="paper-fill" d="M306 540Q417 568 529 540V551Q417 580 306 551Z M307 484H337V495H307Z M498 484H528V495H498Z"/><path d="M315 495V526 M520 495V526"/>
<ellipse cx="419" cy="648" rx="103" ry="11" class="faint"/></g>
<g class="beach-details"><path class="paper-fill" d="M56 565H145V575H56Z"/><path d="M68 575V628 M133 575V628"/><path class="sofa-fill" d="M92 539Q106 524 120 539L117 558H95Z"/><path d="M106 532L119 511 M102 531H112"/><path class="faint" d="M50 677Q126 657 200 675 M289 694Q421 674 567 692"/><path class="paper-fill" d="M206 659Q225 643 244 659L238 667H213Z"/><path d="M215 657L220 665 M226 652V665 M237 657L231 665"/></g>`;
const camp = `<path d="M48 340L136 129L222 340H180L219 407H52L91 340Z M410 310L488 91L566 310H533L587 405H402L448 310Z M135 407V486 M489 405V474"/><path d="M221 487L355 265L483 487Z M355 265L374 487 M355 265L282 487 M282 487L342 386L374 487"/><path d="M120 592L232 549L245 571L134 615Z M132 550L239 592L228 614L120 572Z"/><path class="olive-fill steam" d="M148 544Q106 502 154 456Q146 494 173 478Q191 449 181 424Q237 486 209 541Z"/><path class="paper-fill" d="M164 543Q145 521 175 496Q166 516 187 510Q202 533 188 545Z"/><circle cx="359" cy="114" r="25"/><path class="paper-fill" d="M366 88Q338 122 382 127Q357 153 338 124Q326 99 366 88Z"/><g class="faint"><path d="M72 70V84 M65 77H79 M241 110V124 M234 117H248 M408 182V196 M401 189H415 M560 65V79 M553 72H567 M281 54V68 M274 61H288"/></g><path d="M344 568L506 557L521 584L352 600Z M355 600L342 661 M499 585L516 656"/>`;
const cat = `<g class="scene-cat"><path class="cat-fill" d="M331 584Q323 556 347 545L346 520L364 533L384 518L390 545Q419 547 425 571Q430 590 408 594L348 594Z"/><path class="cat-tail" d="M411 587C459 598 461 555 439 556C422 556 435 575 444 567"/><path d="M349 552q6 6 12 0 M371 552q6 6 12 0 M365 562l3 3l3-3 M368 565v6 M345 561l-16-4 M345 566l-17 4 M390 561l15-5 M391 566l15 3" stroke="var(--paper)"/><path d="M351 589H367 M382 589H400"/></g>`;
export function sceneSvg(id, catId) {
  const item = CATS.find(c => c.id === catId) || CATS[0];
  const scene = SCENES.find(s => s.id === id) || SCENES[0];
  const art = { cafe, 'rainy-room': rainy, 'sunny-beach': beach, campfire: camp }[scene.id];
  const { x, y, scale } = scene.cat;
  const cafeScene = scene.id === 'cafe';
  return `<svg xmlns="http://www.w3.org/2000/svg" class="scene-svg" viewBox="0 0 640 750" role="${cafeScene ? 'group' : 'img'}" aria-label="${scene.name}，${item.name}在${scene.perch}上安静陪伴" style="--cat-color:${item.color}">${art}${sceneDetails[scene.id] || ''}<g class="cat-placement" transform="translate(${x} ${y}) scale(${scale})"><g transform="translate(-380 -594)">${cat}</g></g>${cafeScene ? cafeCurtainControl : ''}</svg>`;
}

// Supports are painted after the architecture and before the cat.
const sceneDetails = {
  'rainy-room': `<path class="paper-fill" d="M175 438H197L194 457H178Z"/><path d="M197 441Q210 438 206 449L196 451"/>
    <g class="paper-fill"><path d="M406 475Q401 462 416 460H515Q530 463 525 478H410Z"/><path d="M338 473L358 460L393 465L375 479Z M338 473V479L375 485L393 471V465"/></g>
    <path class="faint" d="M350 470L374 474 M110 621H510 M119 650H490"/>`,
  campfire: `<g class="paper-fill"><path d="M294 506L416 483L474 519L346 548Z"/><path d="M294 506V514L346 556L474 527V519 M346 548V556"/></g>
    <path class="faint" d="M307 507L347 537 M322 504L362 533 M339 501L379 530 M356 498L396 526 M373 495L413 522 M390 492L430 519 M333 549L328 558 M351 554L348 563 M368 550L366 559"/>
    <path class="paper-fill" d="M444 549H467L464 570H447Z"/><path d="M467 552Q481 549 476 561L466 564 M449 541q-7-8 0-15"/>`
};
