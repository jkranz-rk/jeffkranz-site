export type Recipe = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    slug: 'pasta-carbonara',
    title: 'Pasta Carbonara',
    description: 'Classic Roman pasta — no cream, just eggs, cheese, guanciale, and technique.',
    tags: ['Italian', 'Quick', 'Pasta'],
    image: '/images/placeholder.svg',
    ingredients: [
      '400g spaghetti or rigatoni',
      '200g guanciale (or pancetta), diced',
      '4 egg yolks + 1 whole egg',
      '100g Pecorino Romano, finely grated',
      '50g Parmigiano Reggiano, finely grated',
      'Freshly cracked black pepper',
      'Salt (for pasta water)',
    ],
    steps: [
      'Render guanciale in a cold pan over medium heat until fat is translucent and edges are crisp. Remove from heat.',
      'Whisk together egg yolks, whole egg, and grated cheeses into a thick paste. Season generously with cracked pepper.',
      'Cook pasta in well-salted water until 1 minute shy of al dente. Reserve 1 cup pasta water before draining.',
      'Add pasta to the guanciale pan off heat. Add a splash of pasta water and toss.',
      'Pour egg mixture over pasta, tossing constantly and adding pasta water a splash at a time until sauce is silky and coats every strand.',
      'Serve immediately with more cheese and pepper.',
    ],
  },
];
