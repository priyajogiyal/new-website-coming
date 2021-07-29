home_start.to('.container_lets_get_shit', { opacity: 1, duration: 5, ease: 'power1.inOut' }, 5);
      home_start.to('.container_lets_get_shit', { display: ('block'), ease: 'power1.inOut' }, 4);
      home_start.to('.lets', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 11);
      home_start.to('.get', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 13);
      home_start.to('.shit', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 15);
      home_start.to('.done', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 17);
      home_start.to('.container_lets_get_shit', { scale: 1.5, duration: 10, ease: 'power2.in' }, 17);
      home_start.to('.container_lets_get_shit', { scale: 3, duration: 10, ease: 'power2.out' }, 27);
      home_start.to('.container_start', { scale: 0.5, duration: 10, ease: 'power2.out' }, 27);
      home_start.to('.container_lets_get_shit', { duration: 15, ease: 'power1.inOut' }, 25);
      home_start.to('.container_start', { duration: 15, ease: 'power1.inOut' }, 24);
      home_start.to('.container_start', { duration: 15, ease: 'power1.inOut' }, 24);
      home_start.set('.container_phone', { display: ('block') }, 30);
      home_start.to('.transition_to_phone', { opacity: 1, duration: 10, ease: 'power2.out' }, 26);
      home_start.to('.container_start', { display: ('none') }, 31);
      home_start.to('.container_lets_get_shit', { display: ('none') }, 31);
      home_start.set('.container_phone_content_together', {}, 31);
      home_start.fromTo('.iphone_bg_font_container', { opacity: 0, scale: 2.5 }, {
        scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 31);
      home_start.to('.iphone_bg_font', { text: { value: 'push beyond imagination.', newClass: 'iphone_bg_font_2' }, duration: 8, ease: 'power1.inOut' }, 33);
      home_start.fromTo('.phone_x_box', { y: 500, scale: 2, opacity: 0 }, {
        y: 0, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 31);
      home_start.fromTo('.iphone_2', { opacity: 0 }, {
        x: -170, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 38);
      home_start.fromTo('.iphone_3', { opacity: 0 }, {
        x: 250, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 38);
      home_start.to('.iphone_bg_font', { opacity: 0, duration: 8, ease: 'power1.inOut' }, 44);
      home_start.to('.iphone_bg_font_container', { opacity: 0, duration: 8, ease: 'power1.inOut' }, 44);
      home_start.to('.container_phone_content_together', { duration: 8, ease: 'power1.inOut' }, 43);
      // lap
    home_start.fromTo('#laptop_anim_inner_canvas', { y: 200 }, {
        y: -50, opacity: 1, duration: 20, ease: 'power3.inOut',
    }, 35);
    home_start.to(laptop, {
        duration: 60, frame: frameCount - 1, snap: 'frame', onUpdate: render,
    }, 38);
    home_start.to('#laptop_anim_inner_canvas', { opacity: 0, scale: 5, duration: 40, ease: 'power3.inOut' }, 45);
      home_start.fromTo('.iphone_bg_font_2', { opacity: 0, scale: 0.5 }, {
        opacity: 0.2, scale: 1, duration: 10, ease: 'power1.inOut',
      }, 43);
      home_start.set('.iphone_aufnahme', { opacity: 1, duration: 15, ease: 'power1.inOut' }, 45);
      home_start.set('.tablet_container', { display: ('block') }, 45);
      home_start.to('.iphone_2', {
        x: -300, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 57);
      home_start.to('.iphone_3', {
        x: 350, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 57);
      home_start.to('.phone_x_box', { rotate: 90, duration: 5, ease: 'power1.inOut' }, 60);
      home_start.to('.iphone_aufnahme', { opacity: 0, duration: 5, ease: 'power1.inOut' }, 60);
      home_start.to('.phone_x_box', {
        scale: 3, opacity: 1, duration: 5.5, ease: 'power1.inOut',
      }, 65);
      home_start.set('.iphone_aufnahme_2', {
        display: 'block', width: "100vw", height: "100vh", opacity: 0,
      }, 65);
      home_start.set('.iphone_aufnahme_2_player_ui', { display: 'block', opacity: 0 }, 65);
      home_start.to('.iphone_aufnahme_2', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 68);
      home_start.to('.container_phone_content_together', { display: 'none' }, 70);
      home_start.add(
        () => {
          teaser_video.pause();
        }, null, 67,
      );
      home_start.add(
        () => {
          teaser_video.play();
        }, null, 68,
      );
      home_start.to('.iphone_bg_font', { opacity: 0 }, 72);
      home_start.fromTo('.iphone_aufnahme_2_player_ui', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 5, ease: 'power1.inOut',
      }, 72);
      home_start.to('.iphone_bg_font_2', { opacity: 0 }, 72);
      home_start.to('.iphone_reel_teaser', { opacity: 0 }, 72);
      home_start.to('.iphone_aufnahme_2', { duration: 20, ease: 'power1.inOut' }, 72);
      const responsive_1 = window.matchMedia('(min-width:1100px) and (max-width: 1200px)');
      const responsive_2 = window.matchMedia('(min-width:1200px) and (max-width: 1300px)');
      const responsive_3 = window.matchMedia('(min-width:1300px) and (max-width: 1400px)');
      const responsive_4 = window.matchMedia('(min-width:1400px) and (max-width: 1500px)');
      const responsive_5 = window.matchMedia('(min-width:1500px) and (max-width: 1600px)');
      const responsive_6 = window.matchMedia('(min-width:1600px) and (max-width: 1700px)');
      const responsive_7 = window.matchMedia('(min-width:1700px) and (max-width: 1800px)');
      const responsive_8 = window.matchMedia('(min-width:1800px) and (max-width: 1900px)');
      const responsive_9 = window.matchMedia('(min-width:1900px) and (max-width: 2000px)');
      const responsive_10 = window.matchMedia('(min-width:2000px)');
      if (responsive_1.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '30vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_2.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '33vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_3.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '34vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_4.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '34vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_5.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '35vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_6.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '36vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_7.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '37vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_8.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '38vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_9.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '39vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_10.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '39vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else {

      }
      home_start.to('.iphone_aufnahme_2_player_ui', {
        opacity: 0, y: 50, duration: 5, ease: 'power1.inOut',
      }, 90);
      home_start.to('.iphone_x', { display: ('none') }, 90);
      home_start.to('.iphone_2', { display: ('none') }, 90);
      home_start.to('.iphone_3', { display: ('none') }, 90);
      home_start.to('.iphone_aufnahme_2', { duration: 10, ease: 'power1.inOut' }, 100);
      home_start.to('.iphone_aufnahme_2', { y: -50, duration: 10, ease: 'power1.inOut' }, 110);
      home_start.fromTo('.tablet_font', { y: 100, opacity: 0 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power1.inOut',
      }, 110);
      home_start.add(
        () => {
          teaser_video.muted = true;
          teaser_video.classList.remove('sound_on');
          gsap_teaser_video_sound_toggle.reverse();
        }, null, 120,
      );