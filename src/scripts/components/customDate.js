// --- CUSTOM DATE FUNCTIONS ------------------------------------------------ \\

function checkMaxDay(id, dd, mm, yy) {
  const ddMax = new Date(yy, mm, 0).getDate();
  $(`#${id} .date-dd`).attr("max", ddMax);
  if (dd > ddMax) {
    $(`#${id} .date-dd`).addClass("dform_fielderror");
  } else if (dd !== "") {
    $(`#${id} .date-dd`).removeClass("dform_fielderror");
  }
}

function checkDate(id, dd, mm, yy) {
  if (!dd) $(`#${id} .date-dd`).addClass("dform_fielderror");
  if (!mm) $(`#${id} .date-mm`).addClass("dform_fielderror");
  if (!yy) $(`#${id} .date-yy`).addClass("dform_fielderror");

  const dateMessage = dateMessages[id] || defaultDateMessage;
  $(`#${id}`)
    .find(".dform_validationMessage")
    .text(dateMessage)
    .hide();

  if (!dd && mm && yy)
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a day")
      .show();
  if (dd && !mm && yy)
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a month")
      .show();
  if (dd && mm && !yy)
    $(`#${id} .date-yy`).removeClass("dform_fielderror");
  if (!dd && !mm && yy)
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a day and month")
      .show();
  if (!dd && mm && !yy)
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a day and year")
      .show();
  if (dd && !mm && !yy) {
    $(`#${id} .date-mm`).removeClass("dform_fielderror");
    $(`#${id} .date-yy`).removeClass("dform_fielderror");
  }
  if (!dd && !mm && !yy)
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text(dateMessage)
      .show();

  if (dd && mm && yy) {
    if (validDate(id, dd, mm, yy)) {
      const formattedDate = `${dd.toString().padStart(2, '0')}/${mm.toString().padStart(2, '0')}/${yy.substr(0, 4)}`;
      if (id === "dform_widget_date_field") {
        $("#dform_widget_txt_dob, #dform_widget_dt_dob").val(formattedDate);
      } else if (id === "dform_widget_date_field_another") {
        $("#dform_widget_txt_dob_another, #dform_widget_dt_dob_another").val(formattedDate);
      } else {
        $(`#${id.replace("date_", "dt_")}`).val(formattedDate);
      }
    } else {
      $(`#${id}`)
        .parents(`#${id}`)
        .find(".dform_validationMessage")
        .css({ display: "block" });
    }
  } else {
    $(`#${id}`)
      .parents(`#${id}`)
      .find(".dform_validationMessage")
      .css({ display: "block" });
  }
}

function inputDate(id, nextID, key) {
  const ignoredKeys = [9, 16, 37, 38, 39, 40];
  if (ignoredKeys.indexOf(key) !== -1) return;
  const maxLength = $(`#${id}`).attr("maxlength");
  let value = $(`#${id}`).val();
  if (value.length >= maxLength) {
    $(`#${id}`).val(value.substring(0, maxLength));
    $(`#${id}`).val(value.substring(0, maxLength));
    if (nextID) {
      $(`#${id}`).blur().parent().next().children(`#${nextID}`).focus();
    } else {
      $(`#${id}`).blur().parent().next().focus();
    }
  }
}

function validDate(id, day, month, year) {
  const dateMessage = dateMessages[id] || defaultDateMessage;
  const validationMsg = $(`#${id}`)
    .find(".dform_validationMessage")
    .text(dateMessage)
    .hide();
  const date = new Date(year, month - 1, day);
  const now = new Date();

  const dobField = $(`#${id}`).hasClass("dob") ? true : false;

  if (date.getFullYear() != year ||
    date.getMonth() + 1 != month ||
    date.getDate() != day) {
    validationMsg
      .text(`${dobField
        ? "Date of birth must be a real date"
        : "Must be a real date"}`)
      .show();
    return false;
  }

  const dateRange = $(`#${id}`).hasClass("future") ? "future" : "past";

  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120);
  minDate.setHours(0, 0, 0, 0);

  if (dateRange === 'past') {
    if (date < minDate) {
      validationMsg.
        text("Date cannot be more that 120 years in the past")
        .show();
      return false;
    }
    if (date > now) {
      validationMsg
        .text(`${dobField
          ? "Date of birth must be today or in the past"
          : "Date must be today or in the past"}`)
        .show();
      return false;
    }
    return true;
  }

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 5);
  maxDate.setHours(0, 0, 0, 0);

  if (dateRange === 'future') {
    if (date > maxDate) {
      validationMsg
        .text("Date cannot be more that 5 years in the future")
        .show();
      return false;
    }
    if (date < now) {
      validationMsg
        .text("Date must be today or in the future")
        .show();
    }
    return true;
  }
}

function handleDateInput() {
  $(`.date-field .date-dd`)
    .on("keyup focusout", function (e) {
      if (e.type === "keyup") {
        inputDate(this.id, `${this.id.slice(0, -2)}mm`, e.which);
        return;
      }
      if (this.value) $(this).val($(this).val().padStart(2, "0"));
    });

  $(`.date-field .date-mm`)
    .on("keyup focusout", function (e) {
      const parentId = $(this).parent().attr("id");
      const dateMessage = dateMessages[parentId] || defaultDateMessage;
      const dd = $(`#${this.id.slice(0, -2)}dd`).val();
      const yy = $(`#${this.id.slice(0, -2)}yy`).val();
      if (e.type === "keyup") {
        inputDate(this.id, `${this.id.slice(0, -2)}yy`, e.which);
        return;
      }
      if (this.value) {
        $(this).val($(this).val().padStart(2, "0"));
        return;
      }
      if (dd === "") $(`#${this.id.slice(0, -2)}dd`).addClass("dform_fielderror");
      if (yy === "") $(`#${this.id.slice(0, -2)}yy`).addClass("dform_fielderror");
      $(`#${this.id.replace("num_", "").slice(0, -3)}`)
        .find(".dform_validationMessage")
        .text(dateMessage)
        .show();
    });

  $(`.date-field .date-yy`)
    .attr("min", function () {
      const hasFutureClass = $(this).closest('.date-field').hasClass('future');
      return hasFutureClass ? new Date().getFullYear() : new Date().getFullYear() - 120;
    })
    .attr("max", function () {
      const hasFutureClass = $(this).closest('.date-field').hasClass('future');
      return hasFutureClass ? new Date().getFullYear() + 5 : new Date().getFullYear();
    })
    .on("keyup focusout", function (e) {
      const parentId = $(this).parent().attr("id");
      const dateMessage = dateMessages[parentId] || defaultDateMessage;
      const dd = $(`#${this.id.slice(0, -2)}dd`).val() !== "" ? true : false;
      const mm = $(`#${this.id.slice(0, -2)}mm`).val() !== "" ? true : false;
      $(`${this.id.slice(0, -3)}`)
        .find(".dform_validationMessage")
        .text(dateMessage)
        .hide();
      if (e.type === "keyup") inputDate(this.id, "", e.which);
    });

  $(`.date-field`).on("change focusout", function () {
    const dd = $(`#${this.id} .date-dd`).val();
    const mm = $(`#${this.id} .date-mm`).val();
    const yy = $(`#${this.id} .date-yy`).val();
    checkDate(this.id, dd, mm, yy);
    checkMaxDay(this.id, dd, mm, yy);
  });
}

export { handleDateInput };
