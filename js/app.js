$(function () {
  /* Filter
    =====================*/
  let filter = $("[data-filter]");

  filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data("cat");

        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  /* Modal
    =====================*/

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  // Open
  modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "scale(1)",
      });
    }, 200);
  });

  // Close
  modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents(".modal");

    modalParent.find(".modal__dialog").css({
      transform: "scale(0)",
    });

    setTimeout(function () {
      modalParent.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  // Закрывает если нажато вне окна
  $(".modal").on("click", function (event) {
    let $this = $(this);

    $this.find(".modal__dialog").css({
      transform: "scale(0)",
    });

    setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  //Если нажато на окно - не закрывает
  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });
});
