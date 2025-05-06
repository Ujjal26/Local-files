const sliders = document.querySelectorAll('.slide-on-scroll');
      
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible'); // remove this line for one-time animation
            }
          });
        }, {
          threshold: 0.1
        });
      
        sliders.forEach(slider => {
          observer.observe(slider);
        });