// Complete JavaScript file for the landing page
document.addEventListener("DOMContentLoaded", () => {
  console.log("Landing page JavaScript initialized")

  // HEADER FUNCTIONALITY
  const header = document.querySelector(".header")
  const ctaButton = document.querySelector(".cta-button")
  const signInLink = document.querySelector(".sign-in-link")

  // Header scroll effect
  let lastScrollTop = 0
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    // Hide/show header on scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      header.style.transform = "translateY(-100%)"
    } else {
      header.style.transform = "translateY(0)"
    }
    lastScrollTop = scrollTop
  })

  // CTA Button interactions
  if (ctaButton) {
    ctaButton.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("CTA button clicked")

      // Add click animation
      ctaButton.style.transform = "scale(0.95)"
      setTimeout(() => {
        ctaButton.style.transform = "scale(1)"
      }, 150)

      // Simulate signup action
      alert("Sign up functionality would be implemented here")
    })

    ctaButton.addEventListener("mouseenter", () => {
      ctaButton.style.transform = "translateY(-2px)"
      ctaButton.style.boxShadow = "0 8px 25px rgba(97, 99, 255, 0.3)"
    })

    ctaButton.addEventListener("mouseleave", () => {
      ctaButton.style.transform = "translateY(0)"
      ctaButton.style.boxShadow = "none"
    })
  }

  // Sign in link interaction
  if (signInLink) {
    signInLink.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("Sign in clicked")
      alert("Sign in functionality would be implemented here")
    })
  }

  // HERO SECTION FUNCTIONALITY
  const heroButtons = document.querySelectorAll(".hero-buttons button")
  const playButton = document.querySelector(".play-button")
  const videoThumbnail = document.querySelector(".video-thumbnail")
  const heroTitle = document.querySelector(".hero-title")
  const heroSubtitle = document.querySelector(".hero-subtitle")

  // Hero button interactions
  heroButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      console.log(`Hero button clicked: ${button.textContent}`)

      // Add click animation
      button.style.transform = "scale(0.95)"
      setTimeout(() => {
        button.style.transform = "scale(1)"
      }, 150)

      if (button.classList.contains("btn-primary")) {
        alert("Start free trial functionality would be implemented here")
      } else {
        alert("Learn more functionality would be implemented here")
      }
    })

    button.addEventListener("mouseenter", () => {
      if (button.classList.contains("btn-primary")) {
        button.style.transform = "translateY(-2px)"
        button.style.boxShadow = "0 8px 25px rgba(97, 99, 255, 0.3)"
      } else {
        button.style.transform = "translateY(-2px)"
        button.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)"
      }
    })

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)"
      button.style.boxShadow = "none"
    })
  })

  // Play button functionality
  if (playButton) {
    playButton.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("Play button clicked")

      // Add click animation
      playButton.style.transform = "scale(0.9)"
      setTimeout(() => {
        playButton.style.transform = "scale(1)"
      }, 150)

      // Simulate video play
      alert("Video player would be implemented here")
    })

    playButton.addEventListener("mouseenter", () => {
      playButton.style.transform = "scale(1.1)"
      playButton.style.boxShadow = "0 8px 25px rgba(97, 99, 255, 0.4)"
    })

    playButton.addEventListener("mouseleave", () => {
      playButton.style.transform = "scale(1)"
      playButton.style.boxShadow = "0 4px 15px rgba(97, 99, 255, 0.2)"
    })
  }

  // Hero text animations
  if (heroTitle) {
    heroTitle.style.opacity = "0"
    heroTitle.style.transform = "translateY(30px)"
    setTimeout(() => {
      heroTitle.style.transition = "opacity 0.8s ease, transform 0.8s ease"
      heroTitle.style.opacity = "1"
      heroTitle.style.transform = "translateY(0)"
    }, 200)
  }

  if (heroSubtitle) {
    heroSubtitle.style.opacity = "0"
    heroSubtitle.style.transform = "translateY(30px)"
    setTimeout(() => {
      heroSubtitle.style.transition = "opacity 0.8s ease, transform 0.8s ease"
      heroSubtitle.style.opacity = "1"
      heroSubtitle.style.transform = "translateY(0)"
    }, 400)
  }

  // FEATURES SECTION FUNCTIONALITY
  const featureCards = document.querySelectorAll(".feature-card")
  const featuresTitle = document.querySelector(".features-title")

  // Feature cards intersection observer
  const featureObserverOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
      }
    })
  }, featureObserverOptions)

  // Observe feature cards
  featureCards.forEach((card, index) => {
    featureObserver.observe(card)

    // Set initial state
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`

    // Add hover effects
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)"
      card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)"
      card.style.boxShadow = "none"
    })

    card.addEventListener("click", () => {
      console.log(`Feature card clicked: ${card.querySelector(".feature-title").textContent}`)
      card.style.transform = "scale(0.98)"
      setTimeout(() => {
        card.style.transform = "scale(1)"
      }, 150)
    })
  })

  // Add animate class when cards are visible
  const style = document.createElement("style")
  style.textContent = `
    .feature-card.animate {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `
  document.head.appendChild(style)

  // COMPREHENSIVE TABS SECTION FUNCTIONALITY
  const tabSections = document.querySelectorAll(".tab-section")
  const tabImages = document.querySelectorAll(".tab-interface-img")
  const bulletPoints = document.querySelectorAll(".bullet-point")

  // Intersection Observer for tab sections
  const tabObserverOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  }

  const tabObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")

        // Add stagger effect for content elements
        const textContent = entry.target.querySelector(".tab-text-content")
        const illustration = entry.target.querySelector(".tab-illustration")
        const bullets = entry.target.querySelectorAll(".bullet-point")

        if (textContent) {
          setTimeout(() => {
            textContent.style.opacity = "1"
            textContent.style.transform = "translateX(0)"
          }, 200)
        }

        if (illustration) {
          setTimeout(() => {
            illustration.style.opacity = "1"
            illustration.style.transform = "translateX(0)"
          }, 400)
        }

        // Animate bullet points
        bullets.forEach((bullet, index) => {
          setTimeout(
            () => {
              bullet.style.opacity = "1"
              bullet.style.transform = "translateX(0)"
            },
            600 + index * 100,
          )
        })
      }
    })
  }, tabObserverOptions)

  // Observe all tab sections
  tabSections.forEach((section) => {
    tabObserver.observe(section)

    // Set initial states
    const textContent = section.querySelector(".tab-text-content")
    const illustration = section.querySelector(".tab-illustration")
    const bullets = section.querySelectorAll(".bullet-point")

    if (textContent) {
      textContent.style.opacity = "0"
      textContent.style.transform = "translateX(-30px)"
      textContent.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    }

    if (illustration) {
      illustration.style.opacity = "0"
      illustration.style.transform = "translateX(30px)"
      illustration.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    }

    bullets.forEach((bullet) => {
      bullet.style.opacity = "0"
      bullet.style.transform = "translateX(-20px)"
      bullet.style.transition = "opacity 0.4s ease, transform 0.4s ease"
    })
  })

  // Tab image interactions
  tabImages.forEach((img) => {
    img.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
      this.style.filter = "brightness(1.1)"
      this.style.transition = "transform 0.3s ease, filter 0.3s ease"
    })

    img.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
      this.style.filter = "brightness(1)"
    })

    img.addEventListener("click", function () {
      console.log("Tab interface image clicked")

      // Add click effect
      this.style.transform = "scale(0.98)"
      setTimeout(() => {
        this.style.transform = "scale(1.02)"
      }, 150)
    })
  })

  // Bullet points animation
  bulletPoints.forEach((point, index) => {
    point.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".bullet-icon")
      if (icon) {
        icon.style.transform = "scale(1.2)"
        icon.style.background = "#36A269"
        icon.style.transition = "transform 0.2s ease, background 0.2s ease"
      }
      this.style.color = "#25282C"
    })

    point.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".bullet-icon")
      if (icon) {
        icon.style.transform = "scale(1)"
        icon.style.background = "#48BB78"
      }
      this.style.color = "#9BA9B4"
    })

    point.addEventListener("click", function () {
      console.log(`Bullet point clicked: ${this.textContent}`)
      this.style.transform = "translateX(5px)"
      setTimeout(() => {
        this.style.transform = "translateX(0)"
      }, 200)
    })
  })

  // Smooth scroll between sections
  function smoothScrollToSection(targetSection) {
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  // Keyboard navigation for tabs
  document.addEventListener("keydown", (e) => {
    if (e.altKey) {
      switch (e.key) {
        case "1":
          e.preventDefault()
          smoothScrollToSection(document.querySelector(".first-tab"))
          console.log("Navigated to first tab")
          break
        case "2":
          e.preventDefault()
          smoothScrollToSection(document.querySelector(".second-tab"))
          console.log("Navigated to second tab")
          break
        case "3":
          e.preventDefault()
          smoothScrollToSection(document.querySelector(".third-tab"))
          console.log("Navigated to third tab")
          break
        case "h":
          e.preventDefault()
          smoothScrollToSection(document.querySelector(".hero"))
          console.log("Navigated to hero section")
          break
        case "f":
          e.preventDefault()
          smoothScrollToSection(document.querySelector(".features"))
          console.log("Navigated to features section")
          break
      }
    }
  })

  // Parallax effect for tab sections
  let ticking = false
  function updateParallax() {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".tab-illustration")

    parallaxElements.forEach((element, index) => {
      const speed = 0.3 + index * 0.1
      const yPos = -(scrolled * speed * 0.1)
      element.style.transform = `translateY(${yPos}px)`
    })

    ticking = false
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  })

  // Tab section visibility tracking
  const visibleSections = new Set()

  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionName = entry.target.classList[1] || entry.target.classList[0]
        if (entry.isIntersecting) {
          visibleSections.add(sectionName)
          console.log(`Section visible: ${sectionName}`)
        } else {
          visibleSections.delete(sectionName)
        }
      })
    },
    { threshold: 0.5 },
  )

  tabSections.forEach((section) => {
    visibilityObserver.observe(section)
  })

  // Performance optimization: Lazy load images
  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute("data-src")
            imageObserver.unobserve(img)
            console.log("Image lazy loaded:", img.src)
          }
        }
      })
    },
    { rootMargin: "50px" },
  )

  // Apply lazy loading to tab images
  tabImages.forEach((img) => {
    if (img.src && img.src.includes("blob.v0.dev")) {
      img.dataset.src = img.src
      img.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQwIiBoZWlnaHQ9IjQwNSIgdmlld0JveD0iMCAwIDU0MCA0MDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1NDAiIGhlaWdodD0iNDA1IiBmaWxsPSIjMjUyODJDIi8+Cjwvc3ZnPgo="
      imageObserver.observe(img)
    }
  })

  // GENERAL UTILITY FUNCTIONS

  // Debounce function for performance
  function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  // Throttle function for scroll events
  function throttle(func, limit) {
    let inThrottle
    return function () {
      const args = arguments
      
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  // Smooth scroll to top functionality
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Add scroll to top button
  const scrollTopButton = document.createElement("button")
  scrollTopButton.innerHTML = "↑"
  scrollTopButton.className = "scroll-to-top"
  scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #6163FF;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(97, 99, 255, 0.3);
  `

  document.body.appendChild(scrollTopButton)

  scrollTopButton.addEventListener("click", scrollToTop)

  // Show/hide scroll to top button
  const toggleScrollTopButton = throttle(() => {
    if (window.pageYOffset > 300) {
      scrollTopButton.style.opacity = "1"
      scrollTopButton.style.visibility = "visible"
    } else {
      scrollTopButton.style.opacity = "0"
      scrollTopButton.style.visibility = "hidden"
    }
  }, 100)

  window.addEventListener("scroll", toggleScrollTopButton)

  // Add hover effects to scroll top button
  scrollTopButton.addEventListener("mouseenter", () => {
    scrollTopButton.style.transform = "scale(1.1)"
    scrollTopButton.style.boxShadow = "0 6px 20px rgba(97, 99, 255, 0.4)"
  })

  scrollTopButton.addEventListener("mouseleave", () => {
    scrollTopButton.style.transform = "scale(1)"
    scrollTopButton.style.boxShadow = "0 4px 15px rgba(97, 99, 255, 0.3)"
  })

  // ACCESSIBILITY ENHANCEMENTS

  // Focus management
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation")
    }
  })

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-navigation")
  })

  // Add focus styles
  const focusStyle = document.createElement("style")
  focusStyle.textContent = `
    .keyboard-navigation *:focus {
      outline: 2px solid #6163FF !important;
      outline-offset: 2px !important;
    }
  `
  document.head.appendChild(focusStyle)

  // PERFORMANCE MONITORING

  // Log performance metrics
  window.addEventListener("load", () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType("navigation")[0]
      console.log("Page Load Performance:", {
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
        totalTime: perfData.loadEventEnd - perfData.fetchStart,
      })
    }, 0)
  })

  // ERROR HANDLING

  window.addEventListener("error", (e) => {
    console.error("JavaScript Error:", e.error)
  })

  window.addEventListener("unhandledrejection", (e) => {
    console.error("Unhandled Promise Rejection:", e.reason)
  })

  // RESPONSIVE BEHAVIOR

  let currentBreakpoint = "desktop"

  function checkBreakpoint() {
    const width = window.innerWidth
    let newBreakpoint

    if (width < 480) {
      newBreakpoint = "mobile"
    } else if (width < 768) {
      newBreakpoint = "tablet"
    } else if (width < 1200) {
      newBreakpoint = "laptop"
    } else {
      newBreakpoint = "desktop"
    }

    if (newBreakpoint !== currentBreakpoint) {
      currentBreakpoint = newBreakpoint
      console.log("Breakpoint changed to:", currentBreakpoint)

      
      document.body.setAttribute("data-breakpoint", currentBreakpoint)
    }
  }

  // Check breakpoint on load and resize
  checkBreakpoint()
  window.addEventListener("resize", debounce(checkBreakpoint, 250))

  // INITIALIZATION COMPLETE
  console.log("All JavaScript functionality initialized successfully")
  console.log("Available keyboard shortcuts:")
  console.log("- Alt+1: Navigate to first tab")
  console.log("- Alt+2: Navigate to second tab")
  console.log("- Alt+3: Navigate to third tab")
  console.log("- Alt+H: Navigate to hero section")
  console.log("- Alt+F: Navigate to features section")
})



// Function to add custom animations
function addCustomAnimation(element, animationName, duration = "0.6s") {
  if (!element) return

  element.style.animation = `${animationName} ${duration} ease forwards`
}


function removeAnimations(element) {
  if (!element) return

  element.style.animation = "none"
  element.style.transition = "none"
}

// Function to check if element is in viewport
function isInViewport(element) {
  if (!element) return false

  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Function to get scroll percentage
function getScrollPercentage() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  return (scrollTop / scrollHeight) * 100
}


window.landingPageUtils = {
  addCustomAnimation,
  removeAnimations,
  isInViewport,
  getScrollPercentage,
}
