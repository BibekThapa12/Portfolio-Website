//javascript code for light and dark mode and toggling navbar


      const body = document.querySelector("body"),
            nav = document.querySelector("nav"),
            modeToggle = document.querySelector(".dark-light"),
            searchToggle = document.querySelector(".searchToggle"),
            sidebarOpen = document.querySelector(".sidebarOpen"),
            siderbarClose = document.querySelector(".siderbarClose");
    
      // Check if there's no mode saved or if it's set to dark mode, then set dark mode as default
      let getMode = localStorage.getItem("mode");
      if (!getMode || getMode === "dark-mode") {
        body.classList.add("dark");
        localStorage.setItem("mode", "dark-mode"); // Set dark mode as the default and store it
      }
    
      // js code to toggle dark and light mode
      modeToggle.addEventListener("click", () => {
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
    
        // js code to keep user selected mode even page refresh or file reopen
        if (!body.classList.contains("dark")) {
          localStorage.setItem("mode", "light-mode");
        } else {
          localStorage.setItem("mode", "dark-mode");
        }
      });
    
      // js code to toggle search box
      searchToggle.addEventListener("click", () => {
        searchToggle.classList.toggle("active");
      });
    
      // js code to toggle sidebar
      sidebarOpen.addEventListener("click", () => {
        nav.classList.add("active");
      });
    
      body.addEventListener("click", (e) => {
        let clickedElm = e.target;
    
        if (
          !clickedElm.classList.contains("sidebarOpen") &&
          !clickedElm.classList.contains("menu")
        ) {
          nav.classList.remove("active");
        }
      });

      //javascript code for typewriter effect in homepage

      var typed = new Typed("#element", {
        strings: ["Web Developer", "Youtuber", "Graphics Designer","App Developer", "Learner"],
        typeSpeed: 50,
        loop: true, // Make it infinite
      });

      //javascript code for animating the skills section
    
       // Function to check if an element is in the viewport
       function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
   
      // Function to add animation class when element is in viewport
      function animateOnScroll(element, animationClass) {
        if (isInViewport(element) && !element.classList.contains(animationClass)) {
          element.classList.add(animationClass);
        }
      }
   
      // Function to handle scroll event
      function handleScroll() {
        var programmingSkills = document.querySelectorAll('#programming .skill li span');
        programmingSkills.forEach(function(skill, index) {
          var animationClass;
          switch (index) {
            case 0:
              animationClass = 'html';
              break;
            case 1:
              animationClass = 'css';
              break;
            case 2:
              animationClass = 'php';
              break;
            case 3:
              animationClass = 'javascript';
              break;
            case 4:
              animationClass = 'jquery';
              break;
          }
          animateOnScroll(skill, animationClass);
        });
   
        var platformSkills = document.querySelectorAll('#platforms .skill li span');
        platformSkills.forEach(function(skill, index) {
          var animationClass;
          switch (index) {
            case 0:
              animationClass = 'wordpress';
              break;
            case 1:
              animationClass = 'prestashop';
              break;
            case 2:
              animationClass = 'joomla';
              break;
            case 3:
              animationClass = 'blogger';
              break;
            case 4:
              animationClass = 'tridion';
              break;
          }
          animateOnScroll(skill, animationClass);
        });
   
        var programSkills = document.querySelectorAll('#programs .skill li span');
        programSkills.forEach(function(skill, index) {
          var animationClass;
          switch (index) {
            case 0:
              animationClass = 'dreamweaver';
              break;
            case 1:
              animationClass = 'illustrator';
              break;
            case 2:
              animationClass = 'photoshop';
              break;
            case 3:
              animationClass = 'premiere';
              break;
            case 4:
              animationClass = 'flash';
              break;
          }
          animateOnScroll(skill, animationClass);
        });
      }
   
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);

        //js code for testimonial slider configuration

        $(".slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: false,
            dots: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
          });

        /*js function to download and view the resume*/

      function downloadResume() {
        var resumeUrl = "\assets\docs\My resume.pdf";
        // Open the resume in a new tab
        window.open(resumeUrl, "_blank");
      }

      //js function for about page for counter animation

      
  // Function to start the counter animation
  function startCounter() {
    $(".count").each(function () {
        var $this = $(this);
        var countTo = $this.attr("data-count");

        $({ countNum: $this.text() }).animate(
            { countNum: countTo },
            {
                duration: 2000,
                easing: "linear",
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                },
            }
        );
    });
}
  // Check if the element is in viewport
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return elemTop <= docViewBottom;
}

// Check if the counter elements are in viewport, and start counter if so
$(window).scroll(function () {
    $(".count").each(function () {
        if (isScrolledIntoView(this)) {
            startCounter();
        }
    });
});

//js script for initial loader of the page

// window.addEventListener('load', function() {
//     var loaderContainer = document.getElementById('loader');
//     if (loaderContainer) {
//       loaderContainer.style.display = 'none';
//       document.body.style.overflowX  = "hidden";
//       document.body.style.overflowY  = "auto";
//     }
//   });
  
//   window.addEventListener('beforeunload', function() {
//     var loaderContainer = document.getElementById('loader');
//     if (loaderContainer) {
//       loaderContainer.style.display = 'flex';
//     }
//   });
  

  //javascript code for find in page 

  document.getElementById("findButton").addEventListener("click", function() {
    var searchText = document.getElementById("searchText").value;
  
    if (searchText.trim() !== "") {
      // Open find in page window
      window.find(searchText);
  
      // Simulate pressing Enter
      var enterEvent = new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        key: "Enter",
        code: "Enter"
      });
      document.dispatchEvent(enterEvent);
    }
  });


    // Get the "Back to Top" icon element
  const backToTopIcon = document.getElementById('backToTop');
  
  // Show the "Back to Top" icon when scrolling down a certain distance
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      backToTopIcon.style.display = 'block';
    } else {
      backToTopIcon.style.display = 'none';
    }
  });
  
  // Scroll to the top of the page when the "Back to Top" icon is clicked
  backToTopIcon.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });




