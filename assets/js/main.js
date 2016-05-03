! function() {
    var t = function() {
        this.el = document.createElement("div"), this.el.classList.add("wa-gallery-preloader"), this.wrap = document.createElement("div"), this.wrap.classList.add("wa-gallery-preloader-wrap"), this.spinner = document.createElement("div"), this.spinner.classList.add("wa-gallery-preloader-spinner"), this.patch = document.createElement("div"), this.patch.classList.add("wa-gallery-preloader-patch"), this.clipperLeft = document.createElement("div"), this.clipperLeft.classList.add("wa-gallery-preloader-clipper"), this.clipperLeft.classList.add("left"), this.clipperRight = document.createElement("div"), this.clipperRight.classList.add("wa-gallery-preloader-clipper"), this.clipperRight.classList.add("right");
        var t = document.createElement("div");
        t.classList.add("wa-gallery-preloader-circle"), this.patch.appendChild(t), this.clipperLeft.appendChild(t.cloneNode(!0)), this.clipperRight.appendChild(t.cloneNode(!0)), this.spinner.appendChild(this.clipperLeft), this.spinner.appendChild(this.patch), this.spinner.appendChild(this.clipperRight), this.wrap.appendChild(this.spinner), this.el.appendChild(this.wrap)
    };
    t.prototype.show = function() {
        this.el.classList.remove("hidden"), this.el.style.display = ""
    }, t.prototype.hide = function() {
        var t = this;
        this.el.classList.add("hidden"), setTimeout(function() {
            t.el.classList.contains("hidden") && (t.el.style.display = "none")
        }, 350)
    };
    var e = function(t) {
        this.parent = t, this.mediaList = [], this.opened = !1, this.loaded = !1, this.current = null, this.containerWidth = null, this.containerHeight = null
    };
    e.prototype.addImage = function(t, e) {
        return this.mediaList.push({
            type: "image",
            src: t,
            title: e
        }), this.mediaList.length - 1
    }, e.prototype.addIframe = function(t, e, i, n) {
        return this.mediaList.push({
            type: "iframe",
            src: t,
            title: e,
            width: i,
            height: n
        }), this.mediaList.length - 1
    }, e.prototype.open = function(e) {
        if (!this.opened) {
            var i = this;
            this.current = -1, this.loaded = !1, this.overlay = document.createElement("div"), this.overlay.classList.add("wa-gallery-overlay"), this.frame = document.createElement("div"), this.frame.classList.add("wa-gallery-frame"), this.container = document.createElement("div"), this.container.classList.add("wa-gallery-container"), this.title = document.createElement("div"), this.title.classList.add("wa-gallery-title"), this.loading = new t, this.closeBtn = document.createElement("button"), this.closeBtn.classList.add("wa-gallery-close"), this.closeBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>', this.closeBtn.setAttribute("title", this.parent.lang.close), this.prevBtn = document.createElement("button"), this.prevBtn.classList.add("wa-gallery-prev"), this.prevBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>', this.prevBtn.setAttribute("title", this.parent.lang.prev), this.nextBtn = document.createElement("button"), this.nextBtn.classList.add("wa-gallery-next"), this.nextBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>', this.nextBtn.setAttribute("title", this.parent.lang.next), this.openBtn = document.createElement("button"), this.openBtn.classList.add("wa-gallery-open"), this.openBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>', this.openBtn.setAttribute("title", this.parent.lang.openInNew), this.frame.appendChild(this.container), this.frame.appendChild(this.title), this.frame.appendChild(this.loading.el), this.frame.appendChild(this.closeBtn), this.frame.appendChild(this.prevBtn), this.frame.appendChild(this.nextBtn), this.frame.appendChild(this.openBtn), this.overlay.appendChild(this.frame), document.body.appendChild(this.overlay), this.overlay.addEventListener("click", function(t) {
                t.stopPropagation(), i.close()
            }), this.closeBtn.addEventListener("click", function(t) {
                t.stopPropagation(), i.close()
            }), this.prevBtn.addEventListener("click", function(t) {
                t.stopPropagation(), i.prev()
            }), this.nextBtn.addEventListener("click", function(t) {
                t.stopPropagation(), i.next()
            }), this.container.addEventListener("click", function(t) {
                t.stopPropagation(), i.next()
            }), this.openBtn.addEventListener("click", function(t) {
                t.stopPropagation(), i.openSource()
            }), this.resizeHandler = function() {
                i.resizeContainer()
            }, this.keyDownHandler = function(t) {
                return t.preventDefault(), t.stopPropagation(), 37 === t.keyCode ? i.prev() : 39 === t.keyCode ? i.next() : 27 === t.keyCode && i.close(), !1
            }, window.addEventListener("resize", this.resizeHandler), document.body.addEventListener("keydown", this.keyDownHandler), setTimeout(function() {
                i.overlay.classList.add("opened"), i.loadMedia(e)
            }, 10), this.opened = !0
        }
    }, e.prototype.close = function() {
        if (this.opened) {
            var t = this;
            this.overlay.classList.remove("opened"), window.removeEventListener("resize", this.resizeHandler), document.body.removeEventListener("keydown", this.keyDownHandler), setTimeout(function() {
                t.overlay.parentElement.removeChild(t.overlay), t.opened = !1, t.nextBtn = null, t.prevBtn = null, t.closeBtn = null, t.openBtn = null, t.loading = null, t.container = null, t.frame = null, t.overlay = null, t.current = null, t.containerWidth = null, t.containerHeight = null
            }, 450)
        }
    }, e.prototype.resizeContainer = function() {
        if (this.opened) {
            this.containerWidth || (this.containerWidth = Math.round(.7 * this.overlay.offsetWidth)), this.containerHeight || (this.containerHeight = Math.round(.7 * this.overlay.offsetWidth));
            var t = 160;
            this.overlay.offsetWidth < 480 && (t = 70);
            var e = Math.min(.9 * this.overlay.offsetWidth, this.overlay.offsetWidth - t),
                i = Math.min(.9 * this.overlay.offsetHeight, this.overlay.offsetHeight - 64),
                n = this.containerWidth,
                s = this.containerHeight,
                a = n / s;
            n > e && (n = Math.round(e), s = n / a), s > i && (s = Math.round(i), n = s * a), this.frame.style.width = n + "px", this.frame.style.height = s + "px", this.frame.style.marginLeft = -Math.round(n / 2) + "px", this.frame.style.marginTop = -Math.round(s / 2) + "px"
        }
    }, e.prototype.setMedia = function(t, e, i, n, s) {
        if (this.opened) {
            var a = this;
            this.loaded = !1, this.frame.classList.remove("can-open-in-new"), a.frame.classList.remove("has-title"), this.container.innerHTML = "";
            var r = null;
            "image" == t ? (n && (this.containerWidth = n), s && (this.containerHeight = s), this.resizeContainer(), r = document.createElement("img"), r.addEventListener("load", function() {
                a.containerWidth = r.width, a.containerHeight = r.height, a.resizeContainer(), a.frame.classList.add("can-open-in-new"), a.container.appendChild(r)
            }), r.src = e) : (n && (this.containerWidth = n), s && (this.containerHeight = s + (i ? 52 : 0)), this.resizeContainer(), r = document.createElement("iframe"), r.src = e, r.setAttribute("width", parseInt(this.frame.style.width)), r.setAttribute("height", parseInt(this.frame.style.height) - (i ? 52 : 0)), r.setAttribute("frameborder", "0"), r.setAttribute("allowfullscreen", "allowfullscreen"), this.container.appendChild(r)), r.addEventListener("load", function() {
                setTimeout(function() {
                    i && (a.title.innerHTML = i, a.frame.classList.add("has-title")), a.frame.classList.add("loaded"), a.loading.hide(), a.loaded = !0
                }, 550)
            })
        }
    }, e.prototype.loadMedia = function(t) {
        if (this.opened && t != this.current) {
            var e = this;
            if (!this.mediaList[t]) throw new Error("Undefined media");
            var i = function() {
                e.setMedia(e.mediaList[t].type, e.mediaList[t].src, e.mediaList[t].title, e.mediaList[t].width, e.mediaList[t].height)
            };
            this.loaded ? (this.frame.classList.remove("loaded"), this.loading.show(), setTimeout(i, 350)) : i(), t > 0 ? this.frame.classList.add("has-prev") : this.frame.classList.remove("has-prev"), t < this.mediaList.length - 1 ? this.frame.classList.add("has-next") : this.frame.classList.remove("has-next"), this.current = t
        }
    }, e.prototype.prev = function() {
        if (this.opened) {
            var t = Math.max(0, this.current - 1);
            this.loadMedia(t)
        }
    }, e.prototype.next = function() {
        if (this.opened) {
            var t = Math.min(this.mediaList.length - 1, this.current + 1);
            this.loadMedia(t)
        }
    }, e.prototype.openSource = function() {
        this.opened && window.open(this.mediaList[this.current].src)
    };
    var i = function() {
        this.lang = {
            prev: "Previous",
            next: "Next",
            close: "Close",
            openInNew: "Open in new window"
        }, this.galleries = {}
    };
    i.prototype.openGallery = function(t, e) {
        if (!this.galleries[t]) throw new Error("Gallery not found");
        this.galleries[t].open(e)
    }, i.prototype.addImage = function(t, i, n) {
        return this.galleries[t] || (this.galleries[t] = new e(this)), this.galleries[t].addImage(i, n)
    }, i.prototype.addIframe = function(t, i, n, s, a) {
        return this.galleries[t] || (this.galleries[t] = new e(this)), this.galleries[t].addIframe(i, n, s, a)
    }, i.prototype.bind = function(t) {
        if (!t._wagalleryBound) {
            t._wagalleryBound = !0;
            var e = this,
                i = t.getAttribute("data-gallery") || "_",
                n = t.getAttribute("href") || t.getAttribtue("data-src"),
                s = t.getAttribute("data-title"),
                a = t.hasAttribute("data-iframe") || n.indexOf("youtube") >= 0 ? !0 : !1,
                r = t.hasAttribute("data-width") ? parseInt(t.getAttribute("data-width")) : null,
                o = t.hasAttribute("data-height") ? parseInt(t.getAttribute("data-height")) : null,
                d = null;
            d = a ? this.addIframe(i, n, s, r, o) : this.addImage(i, n, s), t.addEventListener("click", function(t) {
                return t.preventDefault(), t.stopPropagation(), e.openGallery(i, d), !1
            })
        }
    }, i.prototype.bindAll = function(t) {
        for (var e = t.querySelectorAll("a[data-gallery]"), i = 0; i < e.length; i++) this.bind(e.item(i))
    }, window.WAgallery = new i, window.addEventListener("load", function() {
        window.WAgallery.bindAll(document.body)
    })
}();

(function ($, window, i) {
  $.fn.responsiveSlides = function (options) {

    // Default settings
    var settings = $.extend({
      "auto": true,             // Boolean: Animate automatically, true or false
      "speed": 500,             // Integer: Speed of the transition, in milliseconds
      "timeout": 4000,          // Integer: Time between slide transitions, in milliseconds
                
      "random": false,          // Boolean: Randomize the order of the slides, true or false
      "pause": false,           // Boolean: Pause on hover, true or false
      "pauseControls": true,    // Boolean: Pause when hovering controls, true or false
      "prevText": "Previous",   // String: Text for the "previous" button
      "nextText": "Next",       // String: Text for the "next" button
      "maxwidth": "",           // Integer: Max-width of the slideshow, in pixels
      "navContainer": "",       // Selector: Where auto generated controls should be appended to, default is after the <ul>
      "manualControls": "",     // Selector: Declare custom pager navigation
      "namespace": "rslides",   // String: change the default namespace used
      "before": $.noop,         // Function: Before callback
      "after": $.noop           // Function: After callback
    }, options);

    return this.each(function () {

      // Index for namespacing
      i++;

      var $this = $(this),

        // Local variables
        vendor,
        selectTab,
        initiateslider,
        reinitiateslider,
        rotate,
        $tabs,

        // Helpers
        index = 0,
        $slide = $this.children(),
        length = $slide.size(),
        fadeTime = parseFloat(settings.speed),
        waitTime = parseFloat(settings.timeout),
        maxw = parseFloat(settings.maxwidth),

        // Namespacing
        namespace = settings.namespace,
        namespaceIdx = namespace + i,

        // Classes
        navClass = namespace + "_nav " + namespaceIdx + "_nav",
        activeClass = namespace + "_here",
        visibleClass = namespaceIdx + "_on",
        slideClassPrefix = namespaceIdx + "_s",

        // Pager
        $pager = $("<ul class='" + namespace + "_tabs " + namespaceIdx + "_tabs' />"),

        // Styles for visible and hidden slides
        visible = {"float": "left", "position": "relative", "opacity": 1, "zIndex": 2},
        hidden = {"float": "none", "position": "absolute", "opacity": 0, "zIndex": 1},

        // Detect transition support
        supportsTransitions = (function () {
          var docBody = document.body || document.documentElement;
          var styles = docBody.style;
          var prop = "transition";
          if (typeof styles[prop] === "string") {
            return true;
          }
          // Tests for vendor specific prop
          vendor = ["Moz", "Webkit", "Khtml", "O", "ms"];
          prop = prop.charAt(0).toUpperCase() + prop.substr(1);
          var i;
          for (i = 0; i < vendor.length; i++) {
            if (typeof styles[vendor[i] + prop] === "string") {
              return true;
            }
          }
          return false;
        })(),

        // Fading animation
        slideTo = function (idx) {
          settings.before(idx);
          // If CSS3 transitions are supported
          if (supportsTransitions) {
            $slide
              .removeClass(visibleClass)
              .css(hidden)
              .eq(idx)
              .addClass(visibleClass)
              .css(visible);
            index = idx;
            setTimeout(function () {
              settings.after(idx);
            }, fadeTime);
          // If not, use jQuery fallback
          } else {
            $slide
              .stop()
              .fadeOut(fadeTime, function () {
                $(this)
                  .removeClass(visibleClass)
                  .css(hidden)
                  .css("opacity", 1);
              })
              .eq(idx)
              .fadeIn(fadeTime, function () {
                $(this)
                  .addClass(visibleClass)
                  .css(visible);
                settings.after(idx);
                index = idx;
              });
          }
        };

      // Random order
      if (settings.random) {
        $slide.sort(function () {
          return (Math.round(Math.random()) - 0.5);
        });
        $this
          .empty()
          .append($slide);
      }

      // Add ID's to each slide
      $slide.each(function (i) {
        this.id = slideClassPrefix + i;
      });

      // Add max-width and classes
      $this.addClass(namespace + " " + namespaceIdx);
      if (options && options.maxwidth) {
        $this.css("max-width", maxw);
      }

      // Hide all slides, then show first one
      $slide
        .hide()
        .css(hidden)
        .eq(0)
        .addClass(visibleClass)
        .css(visible)
        .show();

      // CSS transitions
      if (supportsTransitions) {
        $slide
          .show()
          .css({
            
            "-webkit-transition": "opacity " + fadeTime + "ms ease-in-out",
            "-moz-transition": "opacity " + fadeTime + "ms ease-in-out",
            "-o-transition": "opacity " + fadeTime + "ms ease-in-out",
            "transition": "opacity " + fadeTime + "ms ease-in-out"
          });
      }

      // Only run if there's more than one slide
      if ($slide.size() > 1) {

        // Make sure the timeout is at least 100ms longer than the fade
        if (waitTime < fadeTime + 100) {
          return;
        }

        // Pager
        if (settings.pager && !settings.manualControls) {
          var tabMarkup = [];
          $slide.each(function (i) {
            var n = i + 1;
            tabMarkup +=
              "<li>" +
              "<a href='#' class='" + slideClassPrefix + n + "'>" + n + "</a>" +
              "</li>";
          });
          $pager.append(tabMarkup);

          // Inject pager
          if (options.navContainer) {
            $(settings.navContainer).append($pager);
          } else {
            $this.after($pager);
          }
        }

     // Manual pager controls
        if (settings.manualControls) {
          $pager = $(settings.manualControls);
          $pager.addClass(namespace + "_tabs " + namespaceIdx + "_tabs");
        }

        // Add pager slide class prefixes
        if (settings.pager || settings.manualControls) {
          $pager.find('li').each(function (i) {
            $(this).addClass(slideClassPrefix + (i + 1));
          });
        }

        // If we have a pager, we need to set up the selectTab function
        if (settings.pager || settings.manualControls) {
          $tabs = $pager.find('a');

          // Select pager item
          selectTab = function (idx) {
            $tabs
              .closest("li")
              .removeClass(activeClass)
              .eq(idx)
              .addClass(activeClass);
          };
        }

        // Auto cycle
        if (settings.auto) {

          initiateslider = function () {
            rotate = setInterval(function () {

              // Clear the event queue
              $slide.stop(true, true);

              var idx = index + 1 < length ? index + 1 : 0;

              // Remove active state and set new if pager is set
              if (settings.pager || settings.manualControls) {
                selectTab(idx);
              }

              slideTo(idx);
            }, waitTime);
          };

          // Init cycle
          initiateslider();
        }

        // Restarting cycle
        reinitiateslider = function () {
          if (settings.auto) {
            // Stop
            clearInterval(rotate);
            // Restart
            initiateslider();
          }
        };

        // Pause on hover
        if (settings.pause) {
          $this.hover(function () {
            clearInterval(rotate);
          }, function () {
            reinitiateslider();
          });
        }

        // Pager click event handler
        if (settings.pager || settings.manualControls) {
          $tabs.bind("click", function (e) {
            e.preventDefault();

            if (!settings.pauseControls) {
              reinitiateslider();
            }

            // Get index of clicked tab
            var idx = $tabs.index(this);

            // Break if element is already active or currently animated
            if (index === idx || $("." + visibleClass).queue('fx').length) {
              return;
            }

            // Remove active state from old tab and set new one
            selectTab(idx);

            // Do the animation
            slideTo(idx);
          })
            .eq(0)
            .closest("li")
            .addClass(activeClass);

          // Pause when hovering pager
          if (settings.pauseControls) {
            $tabs.hover(function () {
              clearInterval(rotate);
            }, function () {
              reinitiateslider();
            });
          }
        }

        // Navigation
        if (settings.nav) {
          var navMarkup =
            "<a href='#' class='" + navClass + " prev'>" + settings.prevText + "</a>" +
            "<a href='#' class='" + navClass + " next'>" + settings.nextText + "</a>";

          // Inject navigation
          if (options.navContainer) {
            $(settings.navContainer).append(navMarkup);
          } else {
            $this.after(navMarkup);
          }

          var $trigger = $("." + namespaceIdx + "_nav"),
            $prev = $trigger.filter(".prev");

          // Click event handler
          $trigger.bind("click", function (e) {
            e.preventDefault();

            var $visibleClass = $("." + visibleClass);

            // Prevent clicking if currently animated
            if ($visibleClass.queue('fx').length) {
              return;
            }

            //  Adds active class during slide animation
            //  $(this)
            //    .addClass(namespace + "_active")
            //    .delay(fadeTime)
            //    .queue(function (next) {
            //      $(this).removeClass(namespace + "_active");
            //      next();
            //  });

            // Determine where to slide
            var idx = $slide.index($visibleClass),
              prevIdx = idx - 1,
              nextIdx = idx + 1 < length ? index + 1 : 0;

            // Go to slide
            slideTo($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            if (settings.pager || settings.manualControls) {
              selectTab($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            }

            if (!settings.pauseControls) {
              reinitiateslider();
            }
          });

          // Pause when hovering navigation
          if (settings.pauseControls) {
            $trigger.hover(function () {
              clearInterval(rotate);
            }, function () {
              reinitiateslider();
            });
          }
        }

      }

      // Max-width fallback
      if (typeof document.body.style.maxWidth === "undefined" && options.maxwidth) {
        var widthSupport = function () {
          $this.css("width", "100%");
          if ($this.width() > maxw) {
            $this.css("width", maxw);
          }
        };

        // Init fallback
        widthSupport();
        $(window).bind("resize", function () {
          widthSupport();
        });
      }

    });

  };
})(jQuery, this, 0);
