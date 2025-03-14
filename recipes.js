const recipesData = [
    {
      name: "Spaghetti Carbonara",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
    },
    {
      name: "Classic Margherita Pizza",
      chef: "Chef Luigi",
      totalRatings: 750,
      avgRating: 4.9,
      uploadedOn: "2024-02-10",
      mealType: "Dinner",
      dishType: "Pizza",
      testKitchenApproved: true,
      contestWinner: true,
      featured: true,
      description: "An authentic Neapolitan pizza with fresh mozzarella, basil, and tomato sauce.",
      imgUrl: "https://media.istockphoto.com/id/686957124/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=STQALvMIjcgXPIvpXXUXItAl05QtbmEUQ_PfwSato48="
    },
    {
      name: "Seafood Paella",
      chef: "Chef Isabella",
      totalRatings: 600,
      avgRating: 4.7,
      uploadedOn: "2024-03-05",
      mealType: "Dinner",
      dishType: "Seafood",
      testKitchenApproved: false,
      contestWinner: true,
      featured: false,
      description: "A Spanish seafood dish with saffron-infused rice, shrimp, mussels, and squid.",
      imgUrl: "https://plus.unsplash.com/premium_photo-1719522017304-e56503664ffd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFlbGxhfGVufDB8fDB8fHww"
    },
    {
      name: "Mango Smoothie",
      chef: "Chef Sophia",
      totalRatings: 300,
      avgRating: 4.6,
      uploadedOn: "2024-02-25",
      mealType: "Breakfast",
      dishType: "Smoothie",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "A refreshing mango smoothie blended with yogurt, honey, and ice.",
      imgUrl: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Mango-Smoothie-Recipe.jpg"
    },
    {
      name: "Chicken Curry",
      chef: "Chef Raj",
      totalRatings: 900,
      avgRating: 4.8,
      uploadedOn: "2024-01-30",
      mealType: "Lunch",
      dishType: "Curry",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "A flavorful chicken curry with a rich and aromatic spice blend.",
      imgUrl: "https://www.whiskaffair.com/wp-content/uploads/2021/10/Andhra-Chicken-Curry-2-3.jpg"
    },
    {
      name: "Tomato Basil Soup",
      chef: "Chef Emma",
      totalRatings: 550,
      avgRating: 4.7,
      uploadedOn: "2024-03-12",
      mealType: "Lunch",
      dishType: "Soup",
      testKitchenApproved: false,
      contestWinner: true,
      featured: true,
      description: "A creamy tomato soup infused with fresh basil and garlic.",
      imgUrl: "https://thestayathomechef.com/wp-content/uploads/2020/08/Roasted-Tomato-Basil-Soup-6.jpg"
    },
    {
      name: "Chocolate Lava Cake",
      chef: "Chef Pierre",
      totalRatings: 800,
      avgRating: 4.9,
      uploadedOn: "2024-02-05",
      mealType: "Dessert",
      dishType: "Dessert",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A rich and decadent chocolate cake with a gooey molten center.",
      imgUrl: "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg"
    },
    {
      name: "Avocado Toast",
      chef: "Chef Lily",
      totalRatings: 400,
      avgRating: 4.5,
      uploadedOn: "2024-03-18",
      mealType: "Breakfast",
      dishType: "Toast",
      testKitchenApproved: false,
      contestWinner: false,
      featured: true,
      description: "Crunchy sourdough bread topped with mashed avocado, cherry tomatoes, and feta cheese.",
      imgUrl: "https://media.istockphoto.com/id/1139597774/photo/toast-with-mashed-avocado-arugula.jpg?s=612x612&w=0&k=20&c=MXJpDlUCAMVnHCIuO6d4uq8iRXrJXegAYkGeuoTd5Wc="
    },
    {
      name: "Vegan Buddha Bowl",
      chef: "Chef Mia",
      totalRatings: 450,
      avgRating: 4.6,
      uploadedOn: "2024-01-22",
      mealType: "Lunch",
      dishType: "Salad",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "A healthy and colorful bowl packed with quinoa, roasted veggies, and tahini dressing.",
      imgUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg"
    },
    {
      name: "Berry Parfait",
      chef: "Chef Olivia",
      totalRatings: 350,
      avgRating: 4.7,
      uploadedOn: "2024-03-20",
      mealType: "Breakfast",
      dishType: "Dessert",
      testKitchenApproved: false,
      contestWinner: true,
      featured: false,
      description: "Layers of Greek yogurt, fresh berries, and granola for a nutritious start to the day.",
      imgUrl: "https://static.toiimg.com/thumb/60143646.cms?imgsize=333176&width=800&height=800"
    },
    {
      name: "Garlic Butter Shrimp",
      chef: "Chef Marco",
      totalRatings: 700,
      avgRating: 4.8,
      uploadedOn: "2024-02-28",
      mealType: "Dinner",
      dishType: "Seafood",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "Juicy shrimp sautéed in a garlic butter sauce, served with lemon wedges.",
      imgUrl: "https://www.jocooks.com/wp-content/uploads/2021/09/garlic-butter-shrimp-1-10.jpg"
    },
  
    {
      name: "Mushroom Risotto",
      chef: "Chef Antonio",
      totalRatings: 400,
      avgRating: 4.7,
      uploadedOn: "2024-03-05",
      mealType: "Lunch",
      dishType: "Rice",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "Creamy risotto made with arborio rice, parmesan cheese, and sautéed mushrooms.",
      imgUrl: "https://media.istockphoto.com/id/1369183332/photo/risotto-with-brown-champignon-mushrooms.jpg?s=612x612&w=0&k=20&c=hXubXk9pxjZbSR436lNbNWMrbGd37Y3v3DaopBoU84M="
    },
    {
      name: "Grilled Salmon",
      chef: "Chef John",
      totalRatings: 550,
      avgRating: 4.8,
      uploadedOn: "2024-03-15",
      mealType: "Dinner",
      dishType: "Seafood",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Perfectly grilled salmon fillet with lemon butter sauce.",
      imgUrl: "https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Y8RYbZFcvec-FXMMuoU-qkprC3TUFNiw3Ysoe8Drn6g="
    },
    {
      name: "Strawberry Smoothie",
      chef: "Chef Lily",
      totalRatings: 350,
      avgRating: 4.7,
      uploadedOn: "2024-04-05",
      mealType: "Breakfast",
      dishType: "Smoothie",
      testKitchenApproved: false,
      contestWinner: false,
      featured: true,
      description: "A refreshing strawberry and banana smoothie with Greek yogurt.",
      imgUrl: "https://www.thespruceeats.com/thmb/DTkCRqNWiK8HmlAANacYhMLhN9E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/strawberry-breakfast-smoothie-recipe-2097149-hero-02-5c1d4b2a46e0fb00014bf2ec.jpg"
    },
    {
      name: "Vegetable Stir Fry",
      chef: "Chef Linda",
      totalRatings: 200,
      avgRating: 4.5,
      uploadedOn: "2024-03-10",
      mealType: "Lunch",
      dishType: "Vegetarian",
      testKitchenApproved: false,
      contestWinner: false,
      featured: false,
      description: "A quick and healthy stir fry with fresh vegetables and soy sauce.",
      imgUrl:   "https://t4.ftcdn.net/jpg/02/55/72/09/360_F_255720974_LwbSsbWusIrwvB8LBaMZBmSkBjkdVkCg.jpg"
    }
  ];
  
  export default recipesData;
  