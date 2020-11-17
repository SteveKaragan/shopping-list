$(function addItem() {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        const newItemTxt = $(event.currentTarget).find('#shopping-list-entry');
        $('.shopping-list').append(
          `<li>
            <span class="shopping-item">${newItemTxt.val()}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
          )
  })
})

$(function deleteItem() {
  $('ul').on('click', '.shopping-item-delete', function(event){
    this.closest('li').remove();
  })
})

//so this code below with toggle all the items

// $(function toggleItem() {
//   $('ul').on('click', '.shopping-item-toggle', function(event){
//     $("span.shopping-item").toggleClass( "shopping-item__checked" )
//   })
// })

//trying to figure out how to just select the "shopping-item" I want
$(function toggleItem() {
  $('ul').on('click', '.shopping-item-toggle', function(event){
    this.closest('span').toggleClass( "shopping-item__checked" )
  })
})
