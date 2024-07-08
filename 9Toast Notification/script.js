let toastBox = document.getElementById('toastBox');
    let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
    let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
    let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

    function showToast(msg) {
      let toast = document.createElement('div');
      toast.classList.add('toast');
      toast.innerHTML = msg;
      toastBox.appendChild(toast);

      if (msg.includes('Please fix the error')) {
        toast.classList.add('error');
      }
      if (msg.includes('Invalid input')) {
        toast.classList.add('invalid');
      }

      setTimeout(() => {toast.remove();
        
      },6000 );
    }