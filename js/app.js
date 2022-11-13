window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px` /*this обращается к window*/
 })

 gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
 ScrollSmoother.create({
     wrapper: '.wrapper',
     content: '.content',
 })