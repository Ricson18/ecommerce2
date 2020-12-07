import mock from '@/fake-db/mock.js'


// mock.onGet('/api/user-management/users').reply(() => {
//   return [200, JSON.parse(JSON.stringify(data.users)).reverse()]
// })

// GET: Fetch Single User Details
// mock.onGet(/\/api\/user-management\/users\/\d+/).reply((request) => {

//   const userId = request.url.substring(request.url.lastIndexOf('/') + 1)

//   const user = data.users.find((user) => user.id == userId)

//   return user ? [200, JSON.parse(JSON.stringify(user))] : [404]
// })

// // POST : Add new Item
// mock.onPost("/api/data-list/products/").reply((request) => {

//   // Get event from post data
//   let item = JSON.parse(request.data).item

//   const length = data.products.length
//   let lastIndex = 0
//   if(length){
//     lastIndex = data.products[length - 1].id
//   }
//   item.id = lastIndex + 1

//   data.products.push(item)

//   return [201, {id: item.id}]
// })

// // Update Product
// mock.onPost(/\/api\/data-list\/products\/\d+/).reply((request) => {

//   const itemId = request.url.substring(request.url.lastIndexOf("/")+1)

//   let item = data.products.find((item) => item.id == itemId)
//   Object.assign(item, JSON.parse(request.data).item)

//   return [200, item]
// })

// // DELETE: Remove Item
// mock.onDelete(/\/api\/user-management\/users\/\d+/).reply((request) => {

//   const userId = request.url.substring(request.url.lastIndexOf('/') + 1)

//   const itemIndex = data.users.findIndex((p) => p.id == userId)
//   data.users.splice(itemIndex, 1)
//   return [200]
// })
