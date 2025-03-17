let cnt = 0;
function checkOfName() {
  let name = document.querySelector("#name").value;
  let regex = /^[A-ZÀ-Ỹ][a-zà-ỹ]+(?: [A-ZÀ-Ỹ][a-zà-ỹ]+)*$/;
  if (regex.test(name)) {
    document.querySelector(".check-name").innerHTML = "Tên Hợp Lệ";
    document.querySelector(".check-name").style.color = "orange";
    return true;
  } else {
    document.querySelector(".check-name").innerHTML = "Tên Không Hợp Lệ";
    document.querySelector(".check-name").style.color = "orange";
    return false;
  }
}

function checkOfDate() {
  let year = document.querySelector("#date").value;
  let birthDay = new Date(year);
  let now = new Date();
  let old = now.getFullYear() - birthDay.getFullYear();
  if (old >= 18) {
    document.querySelector(".check-date").innerHTML = "Bạn đã đủ tuổi ";
    document.querySelector(".check-date").style.color = "orange";
    return true;
  } else {
    document.querySelector(".check-date").innerHTML = "Bạn chưa đủ tuổi";
    document.querySelector(".check-date").style.color = "orange";
    return false;
  }
}

function signIn() {
  if (!checkOfDate() || !checkOfName()) {
    alert("Bạn vui lòng nhập đầy đủ và hợp lệ các thông tin");
    return;
  }
  let year = document.querySelector("#date").value;
  let name = document.querySelector("#name").value;

  let tb = document.querySelector("#table-body");
  let newrows = tb.insertRow();

  let cell0 = newrows.insertCell(0);
  let cell1 = newrows.insertCell(1);
  let cell2 = newrows.insertCell(2);

  cell0.innerHTML = cnt;
  cell1.innerHTML = name;
  cell2.innerHTML = year;

  cnt++;
}
