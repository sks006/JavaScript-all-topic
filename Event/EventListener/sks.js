
   

    TODO: attachEvent()
    TODO: jQuery - on
    TODO: type, timestamp, defaultPrevented
    TODO: target, toElement, srcElement, currentTarget,
    TODO; clientX, clientY, screenX, screenY
    TODO: altkey, ctrlkey, shiftkey, keyCode


    /**
     * 
     * TODO: EVENT {type, timestamp, defaultPrevented}.
     * 
     ### EVENT-TYPE : “click” ,“mousedown”,“mouseup”,“mouseover”,“mouseout”,“keydown”,“keyup”,“load”,“unload”.
     * 
     * 
     * CLICK : If you click and hold the mouse button, the “click” event will not fire until you release the button.
     * 
     * MOUSEDOWN : It doesn’t wait for the button to be released.
     * 
     * MOUSEUP : It doesn’t matter where the button was initially pressed - as long as the release happens over the element, the “mouseup” event will fire.
     *                  CLICK(matter button was initially pressed)
     *                           ---VS---     
     *    MOUSEUP(It doesn’t matter where the button wasinitiallypressed )
     * 
     * MOUSEOVER : This includes entering the area of any of that element’s descendants=বংশধরগণ (child elements).
     * 
     * MOUSEOUT : This event is triggered when the mouse pointer leaves the area of an element
     * 
     * LOAD: it can be used to detect when a web page has finished loading all of its content (including images, script files, CSS files, etc.).
     * 
     * UNLOAD:  It’s used to handle any cleanup tasks that should be performed before the user leaves the page
     * 
     * 
     * 
     ### timestamp: This can be useful for things like measuring the time between two events, logging event times for debugging, or syncing animations or actions with the event.

     ### defaultPrevented :  This can be useful for determining whether the default action of the event has been cancelled.
              
     */

        // document.getElementById("owl").addEventListener("click", (e) => {
    //      console.log(e);
    // });
    //      console.log(e);
    // document.getElementById("prayer").addEventListener("mousedown", (e) => {
    // document.getElementById("prayer").addEventListener("mousedown", (e) => {
    // });
    // document.getElementById("prayer").addEventListener("mouseup", (e) => {
    //      console.log(e);
    // });
    // document.getElementById("prayer").addEventListener("mouseover", (e) => {
    //      console.log(e);
    // });
    // document.getElementById("prayer").addEventListener("mouseout", (e) => {
    //      console.log(e);
    // });

    //______________________________O___________________________

     /**
      * TODO: target, toElement, srcElement, currentTarget,
      * 
      * ###  target : The target property gets the element on which the event originally occurred, even if the event is bubbling.  you have an event listener on a parent element and click on a child element, the event target will be the child element, not the parent.
      * => element.addEventListener('mouseover', function(event) {
      * console.log('mouseover event triggered on ' + event.target.tagName)});
      * 
      * 
      * ###  toElement: The toElement property is specific to IE and is used in the context of mouse events. It gets the element that the mouse is moving to in a mouseout event, or moving from in a mouseover event
      * => element.addEventListener('mouseout', function(event) {
      * console.log('mouseout event triggered on ' + event.target.tagName)});
      * 
      * 
      * ### srcElement: The srcElement property is an alias for target in 
      *  Internet Explorer (IE), and it gets the element on which the event 
      *  originally occurred. This means that if you have an event listener on a 
      *  parent element and an event occurs on a child element, srcElement will 
      *  be the child element, not the parent. However, please note that 
      *  srcElement is not standard and not supported in Firefox.
      * 
      *
      * ###  currentTarget: The currentTarget property, on the other hand, always 
      *  refers to the element that the event listener is attached to, not 
      *  necessarily the element that the event occurred on. This is particularly 
      *  useful during event bubbling and capturing.
      * 
      * => parentElement.addEventListener('click', function(event) {
      *console.log('Event occurred on ' + event.target.tagName);
      *console.log('Event listener attached to ' + event.currentTarget.tagName)});
      * 
      * 
      */
    //______________________________O___________________________

    /**
     * TODO; clientX, clientY, screenX, screenY
     * 
     * ### clientX: This property returns the horizontal coordinate (according to 
     *  the window/client area) of the mouse pointer when a mouse event was       * triggered. clientX corresponds to the x-coordinate (left/right positioning)
     *
     *    
     * ### clientY: This property returns the vertical coordinate (according to  
     *  the window/client area) clientY corresponds to the y-coordinate (up/down 
     *  positioning) of the mouse pointer at the time the event occurred, 
     *  relative to the upper left corner of the browser window’s client area, 
     *  not including any scroll offsets.
     * 
     * ### screenX: This property returns the horizontal coordinate (according to * the screen) of the mouse pointer when a mouse event was triggered.
     * 
     * ### screenY: This property returns the vertical coordinate (according to  
     *  the screen) of the mouse pointer when a mouse event was triggered.
     * 
     * =>(clientX, clientY):
     * This is useful when you want to know the mouse position relative to the 
     *  viewport (the part of the web page currently visible in the browser 
     *  window).
     * 
     * =>(screenX, screenY):
     * This is useful when you want to know the absolute position of the mouse 
     *  pointer on the user’s screen, regardless of the position of the browser 
     *  window or the scroll position of the web page.
     * 
     */

    //______________________________O___________________________
         
    /**
     *  TODO: altkey, ctrlkey, shiftkey, keyCode
     * 
     * ### keyCode: The keyCode property is a number that represents a system and 
     *  implementation dependent numerical code identifying the unmodified value 
     *  of the pressed key. the decimal ASCII (RFC 20) or Windows 1252 code 
     *  corresponding to the key. Be aware that this property is deprecated, and 
     *  it is recommended to use event.key instead. 
     * 
     * => window.addEventListener('keydown', function(event) {
     * console.log('Alt key pressed: ' + event.altKey);
     * console.log('Ctrl key pressed: ' + event.ctrlKey);
     * console.log('Shift key pressed: ' + event.shiftKey);
     * console.log('Key code: ' + event.keyCode)});

     * 
     */
    
    
    //   ____________  EVENT PROPAGATION (INSIDE OUTSIDE) ___________________
    /**
     * ### TODO: Capturing Phase,Target Phase,Bubbling Phase.
     * 
     * Capturing Phase: The event starts from the top of the document and travels 
     *  down the DOM tree to the target element. This is also known as the        * “trickling” phase.
     * 
     * Target Phase: The event has arrived at the target element where it was 
     * dispatched.
     * 
     * Bubbling Phase: After the event has reached its target, it starts to  
     * bubble up again to the root of the document.
     */

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)
       //______________________________O___________________________
         
      // ___________________ REMOVE ITEM___________________________
    
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
    
        
    })
    
    //removeIt.parentNode.removeChild(removeIt)


