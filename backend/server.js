const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const recipes = [
  {
    ingredients: ['chicken', 'yogurt', 'ginger', 'garlic', 'spices'],
    title: 'Chicken Tikka Masala',
    instructions: `
      1. Marinate chicken in a mixture of yogurt, ginger, garlic, and spices for at least 30 minutes.
      2. Grill or bake the chicken until cooked through.
      3. Prepare a tomato-based gravy with onions, tomatoes, and spices.
      4. Add the cooked chicken to the gravy and simmer for a few minutes.
      5. Garnish with fresh cilantro and serve with rice or naan.
    `,
  },
  {
    ingredients: ['lentils', 'turmeric', 'cumin', 'mustard seeds'],
    title: 'Dal Tadka',
    instructions: `
      1. Cook lentils with turmeric powder until soft.
      2. In a separate pan, heat ghee or oil.
      3. Add cumin seeds, mustard seeds, and dried red chilies.
      4. Once they splutter, add chopped onions, ginger, and garlic.
      5. Sauté until golden brown.
      6. Add the tempered spices to the cooked lentils.
      7. Garnish with cilantro and serve hot.
    `,
  },
    {
    ingredients: ['potatoes', 'cauliflower', 'turmeric', 'cumin'],
    title: 'Aloo Gobi',
    instructions: `
      1. Cut potatoes and cauliflower into florets.
      2. Heat oil in a pan and add cumin seeds.
      3. Add chopped onions and sauté until golden brown.
      4. Add ginger-garlic paste and sauté for a minute.
      5. Add turmeric powder, coriander powder, and red chili powder.
      6. Add potatoes and cauliflower florets and mix well.
      7. Add salt and cook covered until vegetables are tender.
      8. Garnish with cilantro and serve hot.
    `,
  },
  {
    ingredients: ['rice', 'vegetables', 'spices', 'mint'],
    title: 'Vegetable Biryani',
    instructions: `
      1. Soak basmati rice for 30 minutes.
      2. Sauté vegetables (carrots, beans, peas) with spices.
      3. Layer rice and vegetables in a pot.
      4. Add saffron-infused milk and mint leaves.
      5. Cook on low heat until rice is done.
      6. Garnish with fried onions and nuts.
    `,
  },
  {
    ingredients: ['paneer', 'spinach', 'ginger', 'garlic'],
    title: 'Palak Paneer',
    instructions: `
      1. Blanch spinach leaves and puree them.
      2. Sauté paneer cubes until golden brown.
      3. Heat oil and add ginger-garlic paste.
      4. Add the spinach puree and spices.
      5. Add paneer cubes and simmer.
      6. Garnish with cream and serve hot.
    `,
  },
    {
    ingredients: ['chickpeas', 'tomatoes', 'onions', 'spices'],
    title: 'Chole Masala',
    instructions: `
      1. Soak chickpeas overnight and boil until tender.
      2. Sauté onions, ginger, and garlic.
      3. Add chopped tomatoes and spices.
      4. Add boiled chickpeas and simmer.
      5. Garnish with cilantro and serve hot.
    `,
  },
    {
    ingredients: ['potatoes', 'peas', 'spices', 'pastry'],
    title: 'Samosa',
    instructions: `
      1. Boil and mash potatoes, add peas and spices.
      2. Prepare a dough with flour and water.
      3. Fill the dough with potato mixture and shape into samosas.
      4. Deep fry until golden brown.
      5. Serve hot with chutney.
    `,
  },
    {
    ingredients: ['rice', 'lentils', 'vegetables', 'spices'],
    title: 'Khichdi',
    instructions: `
      1. Wash rice and lentils together.
      2. Sauté vegetables and spices.
      3. Add rice, lentils, and water.
      4. Cook until soft and mushy.
      5. Add ghee and serve hot.
    `,
  },
    {
    ingredients: ['lentils', 'spinach', 'ginger', 'garlic'],
    title: 'Dal Palak',
    instructions: `
      1. Cook lentils with turmeric and salt.
      2. Sauté ginger, garlic, and spinach.
      3. Add cooked lentils and spices.
      4. Simmer for a few minutes.
      5. Serve hot with rice or roti.
    `,
  },
    {
    ingredients: ['okra', 'onions', 'tomatoes', 'spices'],
    title: 'Bhindi Masala',
    instructions: `
      1. Wash and cut okra into pieces.
      2. Sauté okra until slightly cooked.
      3. Sauté onions, tomatoes, and spices.
      4. Add okra and cook until tender.
      5. Serve hot with roti.
    `,
  },
    {
    ingredients: ['yogurt', 'cucumber', 'cumin', 'mint'],
    title: 'Raita',
    instructions: `
      1. Grate cucumber and squeeze out excess water.
      2. Mix yogurt with grated cucumber.
      3. Add roasted cumin powder, mint leaves, and salt.
      4. Chill and serve.
    `,
  },
    {
    ingredients: ['eggplant', 'tomatoes', 'onions', 'spices'],
    title: 'Baingan Bharta',
    instructions: `
      1. Roast eggplant until soft and peel the skin.
      2. Mash the eggplant.
      3. Sauté onions, tomatoes, and spices.
      4. Add mashed eggplant and cook.
      5. Garnish with cilantro and serve hot.
    `,
  },
    {
    ingredients: ['coconut milk', 'vegetables', 'spices', 'curry leaves'],
    title: 'Vegetable Stew',
    instructions: `
      1. Sauté vegetables with spices and curry leaves.
      2. Add coconut milk and simmer.
      3. Cook until vegetables are tender.
      4. Serve hot with appam or rice.
    `,
  },
    {
    ingredients: ['rice flour', 'coconut milk', 'jaggery', 'cardamom'],
    title: 'Appam',
    instructions: `
      1. Mix rice flour, coconut milk, jaggery, and cardamom.
      2. Ferment the batter for a few hours.
      3. Cook on a special appam pan.
      4. Serve hot with vegetable stew.
    `,
  },
    {
    ingredients: ['semolina', 'yogurt', 'vegetables', 'spices'],
    title: 'Uttapam',
    instructions: `
      1. Mix semolina and yogurt to make a batter.
      2. Add chopped vegetables and spices.
      3. Cook on a griddle until golden brown.
      4. Serve hot with chutney.
    `,
  }
];

app.post('/recipes', (req, res) => {
  const ingredients = req.body.ingredients;
  if (!ingredients || !Array.isArray(ingredients)) {
    return res.status(400).json({ error: 'Ingredients must be a non-empty array' });
  }

  const foundRecipes = recipes.filter((recipe) =>
    ingredients.every((ingredient) => recipe.ingredients.includes(ingredient))
  );

  res.json(foundRecipes);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});