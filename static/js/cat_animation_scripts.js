// Cat animation Lottie / Contact

var animation = lottie.loadAnimation({
    container: document.getElementById('cat-animation'),
    path: '/static/animations/kitty.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Kitty"
});
animation.setSpeed(0.7);

// Event listener for mouse pointer
document.getElementById('cat-animation').addEventListener('mouseenter', function() {
    animation.setDirection(1); // Ensure forward direction when hovered
    animation.play(); // Start the animation on mouse enter
});

// Reverse animation after completion and reset to initial state
animation.addEventListener('complete', function() {
    if (animation.playDirection === 1) {
        // After playing forward, reverse it
        animation.setDirection(-1);
        animation.play();
    } else {
        // After reverse, reset to the first frame
        animation.goToAndStop(0, true);
    }
});


// Lift Cat animation Lottie / Tech

var lift_animation = lottie.loadAnimation({
    container: document.getElementById('lift_cat-animation'),
    path: '/static/animations/liftcat.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "liftcat"
});
lift_animation.setSpeed(0.7);


// Sitting Cat animation Lottie / Jobs

var sittingCatAnimation = lottie.loadAnimation({
    container: document.getElementById('sitting_cat-animation'),
    path: '/static/animations/sitting_cat.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "sitting_cat"
});
