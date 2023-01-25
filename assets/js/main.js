(function () {
  ("use strict");

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  /**  Easy on scroll event listener   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**  Back to top button   */
  const backToTop = select(".back-to-top");
  const heroScroll = select("#hero");
  // heroScroll.addEventListener("scroll", (event) => {
  //   if (heroScroll.scrollTop > 100) {
  //     console.log(heroScroll.scrollTop);
  //     backToTop.classList.add("active");
  //   } else {
  //     backToTop.classList.remove("active");
  //   }
  // });
  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 500) {
        backToTop.classList.add("active");
      } else {
        backToTop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBackToTop);
    onscroll(document, toggleBackToTop);
  }
  const TeamF8_01 = select(".TeamF8_01");
  const TeamF8_02 = select(".TeamF8_02");
  const TeamF8_03 = select(".TeamF8_03");
  const TeamF8_04 = select(".TeamF8_04");
  const Admin_F8 = select(".Admin_F8");
  if (Admin_F8) {
    const changeView = () => {
      let transform = Math.floor(heroScroll.scrollTop);
      if (transform > 0) {
        Admin_F8.style.transform = `translateZ(${transform / 17}px) translateY(${transform}px)`;
        TeamF8_01.style.transform = `translateX(${transform / 3.4}px) translateZ(${
          transform / 16.5
        }px) translateY(${transform}px)`;
        TeamF8_02.style.transform = `translateX(${(transform / 3.4) * -1}px) translateZ(${
          transform / 16.5
        }px) translateY(${transform}px)`;
        TeamF8_03.style.transform = `translateX(${(transform / 1.4) * -1}px) translateZ(${
          transform / 18
        }px) translateY(${transform}px)`;
        TeamF8_04.style.transform = `translateX(${transform / 1.4}px) translateZ(${
          transform / 18
        }px) translateY(${transform}px)`;
      } else {
        Admin_F8.style.transform = `translateZ(7px) translateY(-128px)`;
        TeamF8_01.style.transform = `translateZ(7px) translateY(-128px)`;
        TeamF8_02.style.transform = `translateZ(7px) translateY(-128px)`;
        TeamF8_03.style.transform = `translateZ(7px) translateY(-128px)`;
        TeamF8_04.style.transform = `translateZ(7px) translateY(-128px)`;
      }
    };
    window.addEventListener("load", changeView);
    onscroll(heroScroll, changeView);
  }

  const onclick = (el, cb) => {
    el.addEventListener("click", cb);
  };
  const dpl_result = select(".dpl_result");
  if (dpl_result) {
    let dpl_value = select(".dpl_value");
    let demoDisplay = select(".demoDisplay");
    let changeProperties = (e) => {
      let flex = e.target.classList.contains("dpl_flex");
      let inl = e.target.classList.contains("dpl_inlineFlex");
      if (inl || flex) {
        let value = e.target.innerText;
        dpl_value.innerText = value + ";";
        demoDisplay.style.display = value;
      }
    };
    onclick(dpl_result, changeProperties);
  }

  // optionValue;

  const optionValue = select("#optionValue");
  let explain = select(".explain");
  let info_flexDirection = select(".info_flexDirection");
  let info_flexWrap = select(".info_flexWrap");
  let info_justifyContent = select(".info_justifyContent");
  let info_alignItems = select(".info_alignItems");
  let info_alignContent = select(".info_alignContent");
  let addInfo = select(".addInfo");

  // let info_gap = select(".info_gap");

  if (optionValue) {
    let peachBranch = select(".peachBranch");
    let parentId = "";
    let parentEle;
    let value = "";
    let peachBudEle = [];
    let trationBudId = [];
    let i = 3;
    let visualDemonstration = (e) => {
      parentEle = e.target;
      if (parentEle) {
        value = parentEle.value;
        parentId = parentEle.id;
      }
      if (parentId) {
        let perf_flexDirection = select(".perf_flexDirection");
        let perf_flexWrap = select(".perf_flexWrap");
        let perf_justifyContent = select(".perf_justifyContent");
        let perf_alignItems = select(".perf_alignItems");
        let perf_alignContent = select(".perf_alignContent");

        switch (parentId) {
          case "selec_direction":
            explain.innerHTML = info_flexDirection.innerHTML;
            switch (value) {
              case "row":
              case "row-reverse":
              case "column":
              case "column-reverse":
                perf_flexDirection.innerText = value + ";";
                peachBranch.style.flexDirection = value;
                break;
              default:
                break;
            }
            break;
          case "selec_wrap":
            explain.innerHTML = info_flexWrap.innerHTML;
            switch (value) {
              case "nowrap":
              case "wrap":
              case "wrap-reverse":
                perf_flexWrap.innerText = value + ";";
                peachBranch.style.flexWrap = value;
                break;
              default:
                break;
            }
            break;
          case "selec_justify":
            explain.innerHTML = info_justifyContent.innerHTML;
            switch (value) {
              case "flex-start":
              case "flex-end":
              case "center":
              case "space-around":
              case "space-between":
                perf_justifyContent.innerText = value + ";";
                peachBranch.style.justifyContent = value;
                break;
              default:
                break;
            }
            break;
          case "selec_alignItems":
            explain.innerHTML = info_alignItems.innerHTML;
            switch (value) {
              case "stretch":
              case "baseline":
              case "center":
              case "space-around":
              case "space-between":
                perf_alignItems.innerText = value + ";";
                peachBranch.style.alignItems = value;
                break;
              default:
                break;
            }
            break;
          case "selec_alignContent":
            explain.innerHTML = info_alignContent.innerHTML;
            switch (value) {
              case "stretch":
              case "flex-start":
              case "flex-end":
              case "center":
              case "space-around":
              case "space-between":
              case "space-evenly":
                perf_alignContent.innerText = value + ";";
                peachBranch.style.alignContent = value;
                break;
              default:
                break;
            }
            break;
          case "addElement":
            let peachBud = document.createElement("div");
            peachBud.classList = `peachBud`;
            peachBud.innerHTML = `<img src="./assets/img/peachBud.png" alt="peach Bud">`;
            if (peachBudEle.length < 3) {
              i++;
              let BudId = "trationBud" + i;
              peachBud.id = BudId;
              trationBudId.push(BudId);
              peachBudEle.push(peachBud);
              peachBudEle.map((item) => {
                peachBranch.lastChild.after(item);
              });
            } else {
              addInfo.style.display = "block";
            }
            break;
          case "removeElement":
            if (peachBudEle.length > 0) {
              i--;
              let idRemove = trationBudId.pop();
              let eleRemove = document.getElementById(idRemove);
              eleRemove.remove();
              peachBudEle.pop();
            }
            break;
          case "flexReset":
            perf_flexDirection.innerText = "row; (default)";
            perf_flexWrap.innerText = "nowrap; (default)";
            perf_justifyContent.innerText = "flex-start; (default)";
            perf_alignItems.innerText = "stretch; (default)";
            perf_alignContent.innerText = "stretch; (default)";
            Object.assign(peachBranch.style, {
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
            });
            if (trationBudId !== []) {
              trationBudId.map((item) => {
                document.getElementById(item).remove();
              });
              peachBudEle = [];
              trationBudId = [];
              i = 3;
            }
            break;
          default:
            break;
        }
      } else {
      }
    };
    onclick(optionValue, visualDemonstration);
  }
  const addElement = select("#addElement");
  const infoControl = select(".infoControl");
  addElement.onmouseenter = function hdlOnMouseEnter(e) {
    infoControl.style.display = "block";
  };
  addElement.onmouseout = function hdlOnMouseOut(e) {
    infoControl.style.display = "none";
    addInfo.style.display = "none";
  };
  /** Preloader  */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }
})();
