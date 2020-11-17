
//need to make this work with return key .attr('aria-pressed')
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

//so this code below with toggle all the items,
//tried this.closest('span').toggleClass( "shopping-item__checked" )
//and several others but I cannot isolate the one correct item
$(function toggleItem() {
  $('ul').on('click', '.shopping-item-toggle', function(event){
     $("span.shopping-item").toggleClass( "shopping-item__checked" )
  })
})


