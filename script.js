const TODOS = [
  { before: 'Mua ô tô', after: 'Mua ô <del>tô</del>' },
  { before: 'Tiết kiệm 200.000.000', after: 'Tiết kiệm 200.000<del>.000</del>' },
  { before: 'Thay điện thoại mới', after: 'Thay ốp điện thoại mới' },
  { before: 'Giảm béo thành công 5kg', after: '<del>Giảm</del> béo thành công 5kg' },
  { before: 'Sống cuộc sống an nhàn', after: 'Sống <del>cuộc sống an nhàn</del>' },
]

const todoLst = document.querySelector('.todos')

TODOS.forEach((e, idx) => {
  let child = document.createElement('div')
  child.className = 'todo'
  child.innerHTML =
    `<label for="todo-${idx}">
        <input id="todo-${idx}" type="checkbox" hidden/>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">
          <use xlink:href="#todo__box" class="todo__box"></use>
          <use xlink:href="#todo__check" class="todo__check"></use>
          <use xlink:href="#todo__circle" class="todo__circle"></use>
        </svg>
        <span class="todo__text">${e.before}</span>
      </label>
    `;
  child.addEventListener('click',function () { 
    let e = this.querySelector('#todo-' + idx)
    this.querySelector('.todo__text').innerHTML = e.checked ? TODOS[idx].after : TODOS[idx].before
  })
  todoLst.appendChild(child)
})