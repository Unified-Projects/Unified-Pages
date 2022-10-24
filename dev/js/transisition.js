import Highway from "@dogstudio/highway";

// GSAP Library
import Tween from 'gsap';

class Fade extends Highway.Transition{
    in ({from, to, done}){

        // Reset Scroll
        window.scrollTo(0, 0);

        // Remove Old View
        from.remove();

        // Animation
        Tween.fromTo(to, 0.5,
            { opacity: 0 },
            {
                opacity: 1,
                onComplete: done
            }
        );

    }

    out ({from, done}){
        done();
    }
}

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});