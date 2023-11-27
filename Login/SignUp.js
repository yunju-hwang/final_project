//email 직접 입력 칸 구현
const domainListEl = document.querySelector('#domain-list')
const domainInputEl = document.querySelector('#domain-txt')

domainListEl.addEventListener('change', (event) => {
  if(event.target.value !== "type") {

    domainInputEl.value = event.target.value
    domainInputEl.disabled = true
  } else { // 직접 입력 시
  
    domainInputEl.value = ""
    domainInputEl.disabled = false
  }
})

//비밀번호 확인
function test() {
    var p1 = document.getElementById('password1').value;
    var p2 = document.getElementById('password2').value;

    if(p1.length < 6) {
        alert('입력한 글자가 6글자 이상이어야 합니다.');
        return false;
    }

    if( p1 != p2 ) {
      alert("비밀번호가 일치하지 않습니다");
      return false;
    } 

  }