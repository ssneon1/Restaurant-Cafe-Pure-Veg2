export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: number;
  variants?: { label: string; price: number }[];
  veg: boolean;
  popular?: boolean;
  spicy?: boolean;
  bestseller?: boolean;
  emoji?: string;
  image?: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
  items: MenuItem[];
};

export const menuData: Category[] = [
  {
    id: 'tandoor-starters',
    name: 'Tandoor Starters',
    icon: '🔥',
    description: 'Smoky charcoal-grilled delicacies straight from our clay tandoor',
    items: [
      { id: 'paneer-tikka', name: 'Paneer Tikka', description: 'Marinated cottage cheese cubes char-grilled to perfection', price: 240, veg: true, popular: true, bestseller: true, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
      { id: 'afghani-tikka', name: 'Afghani Tikka', description: 'Creamy white marinade with cashew & yogurt', price: 260, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop' },
      { id: 'paneer-malai-tikka', name: 'Paneer Malai Tikka', description: 'Soft paneer in rich malai marinade', price: 270, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop' },
      { id: 'mushroom-tikka', name: 'Mushroom Tikka', description: 'Button mushrooms with tandoori spices', price: 230, veg: true, image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop' },
      { id: 'achari-paneer-tikka', name: 'Achari Paneer Tikka', description: 'Tangy pickle-spiced paneer tikka', price: 250, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
      { id: 'achari-mushroom-tikka', name: 'Achari Mushroom Tikka', description: 'Achari twist on classic mushroom tikka', price: 240, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'indian-starters',
    name: 'Indian Starters',
    icon: '🍢',
    description: 'Soya chaap & traditional Indian appetizers',
    items: [
      { id: 'malai-chaap', name: 'Malai Chaap', description: 'Soft soya chaap in creamy malai marinade', price: 220, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop' },
      { id: 'tandoori-chaap', name: 'Tandoori Chaap', description: 'Classic tandoori-spiced soya chaap', price: 210, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop' },
      { id: 'achari-soya-chaap', name: 'Achari Soya Chaap', description: 'Pickle-spiced soya chaap', price: 220, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop' },
      { id: 'banjara-chaap', name: 'Banjara Chaap', description: 'Earthy Banjara-style spiced chaap', price: 230, veg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'snacks',
    name: 'Snacks & Quick Bites',
    icon: '🍟',
    description: 'Indo-Chinese & crunchy quick favorites',
    items: [
      { id: 'crispy-veg', name: 'Crispy Veg', description: 'Crunchy battered vegetables', price: 180, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop' },
      { id: 'spring-roll', name: 'Spring Roll', description: 'Crispy rolls with veg stuffing', price: 160, veg: true, image: 'https://images.unsplash.com/photo-1548755283-b9b5c7f2a3f2?w=400&h=300&fit=crop' },
      { id: 'chilli-paneer-dry', name: 'Chilli Paneer Dry', description: 'Indo-Chinese paneer in spicy sauce', price: 230, veg: true, bestseller: true, spicy: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'paneer-65', name: 'Paneer 65', description: 'South-Indian style fried paneer', price: 220, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
      { id: 'veg-65', name: 'Veg 65', description: 'Spicy fried veggies, South-style', price: 180, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop' },
      { id: 'chilli-mushroom-dry', name: 'Chilli Mushroom Dry', description: 'Spicy stir-fried mushrooms', price: 210, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop' },
      { id: 'chilli-paneer', name: 'Chilli Paneer', description: 'Gravy-style chilli paneer', price: 240, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'honey-chilli-potato', name: 'Honey Chilli Potato', description: 'Sweet, spicy & crunchy potatoes', price: 170, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop' },
      { id: 'crispy-american-corn', name: 'Crispy American Corn', description: 'Crunchy corn kernels with seasoning', price: 180, veg: true, image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop' },
      { id: 'veg-manchurian-dry', name: 'Veg Manchurian Dry', description: 'Veg balls in tangy manchurian sauce', price: 180, veg: true, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop' },
      { id: 'paneer-pakoda', name: 'Paneer Pakoda', description: 'Battered & fried paneer fritters', price: 190, veg: true, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
      { id: 'onion-pakoda', name: 'Onion Pakoda', description: 'Crispy onion fritters', price: 120, veg: true, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'rolls',
    name: 'Rolls',
    icon: '🌯',
    description: 'Hand-rolled wraps with delicious fillings',
    items: [
      { id: 'veg-rolls', name: 'Veg Rolls', price: 110, veg: true, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
      { id: 'paneer-rolls', name: 'Paneer Rolls', price: 140, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
      { id: 'cheese-paneer-rolls', name: 'Cheese Paneer Rolls', price: 160, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
      { id: 'manchurian-rolls', name: 'Manchurian Rolls', price: 150, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
      { id: 'cf-special-spring-rolls', name: 'Cloudy Food Special Spring Rolls', description: 'Our signature loaded spring rolls', price: 180, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1548755283-b9b5c7f2a3f2?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'soups',
    name: 'Soups',
    icon: '🍲',
    description: 'Warm comforting soups',
    items: [
      { id: 'sweet-corn-soup', name: 'Sweet Corn Soup', price: 90, veg: true, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop' },
      { id: 'tomato-soup', name: 'Tomato Soup', price: 90, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop' },
      { id: 'hot-sour-soup', name: 'Hot & Sour Soup', price: 100, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'burgers',
    name: 'Burgers',
    icon: '🍔',
    description: 'Juicy patties stacked between toasted buns',
    items: [
      { id: 'veg-burger', name: 'Veg Burger', price: 80, veg: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop' },
      { id: 'veg-cheese-burger', name: 'Veg Cheese Burger', price: 110, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop' },
      { id: 'cheese-paneer-burger', name: 'Cheese Paneer Burger', price: 140, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop' },
      { id: 'cf-special-burger', name: 'Cloudy Food Special Burger', description: 'Triple stacked signature burger', price: 180, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'fries',
    name: 'French Fries',
    icon: '🍟',
    description: 'Golden crispy fries in many flavors',
    items: [
      { id: 'french-fries', name: 'French Fries', price: 110, veg: true, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop' },
      { id: 'tandoori-french-fries', name: 'Tandoori French Fries', price: 140, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop' },
      { id: 'cheese-cream-loaded-fries', name: 'Cheese Cream Loaded Fries', price: 180, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=300&fit=crop' },
      { id: 'peri-peri-french-fries', name: 'Peri-Peri French Fries', price: 150, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    icon: '🥪',
    description: 'Toasted, grilled & loaded sandwiches',
    items: [
      { id: 'veg-sandwich', name: 'Veg Sandwich', price: 90, veg: true, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
      { id: 'cheese-sandwich', name: 'Cheese Sandwich', price: 120, veg: true, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
      { id: 'paneer-sandwich', name: 'Paneer Sandwich', price: 130, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
      { id: 'tandoori-paneer-grill-sandwich', name: 'Tandoori Paneer Grill Sandwich', price: 160, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
      { id: 'cf-special-sandwich', name: 'Cloudy Food Special Sandwich', description: 'Loaded grill sandwich, our way', price: 180, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: '🍕',
    description: 'Fresh hand-tossed pizzas with stretchy mozzarella',
    items: [
      { id: 'margherita-pizza', name: 'Margherita Pizza', description: 'Classic cheese & tomato', price: 180, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
      { id: 'farmhouse-pizza', name: 'Farmhouse Pizza', description: 'Loaded with fresh garden veggies', price: 240, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
      { id: 'veggie-supreme-pizza', name: 'Veggie Supreme Pizza', price: 260, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
      { id: 'paneer-pizza', name: 'Paneer Pizza', price: 250, veg: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
      { id: 'mushroom-pizza', name: 'Mushroom Pizza', price: 240, veg: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
      { id: 'onion-capsicum-pizza', name: 'Onion Capsicum Pizza', price: 220, veg: true, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
      { id: 'cheese-burst-pizza', name: 'Cheese Burst Pizza', description: 'Molten cheese-filled crust', price: 290, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' },
      { id: 'extra-cheese', name: 'Extra Cheese (Add-on)', price: 60, veg: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
      { id: 'extra-topping', name: 'Extra Topping (Add-on)', price: 40, veg: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'noodles',
    name: 'Noodles',
    icon: '🍜',
    description: 'Wok-tossed Indo-Chinese noodles',
    items: [
      { id: 'veg-chowmein', name: 'Veg Chowmein', price: 130, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=300&fit=crop' },
      { id: 'paneer-chowmein', name: 'Paneer Chowmein', price: 160, veg: true, image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=300&fit=crop' },
      { id: 'hakka-noodles', name: 'Hakka Noodles', price: 140, veg: true, image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=300&fit=crop' },
      { id: 'schezwan-chowmein', name: 'Schezwan Chowmein', price: 150, veg: true, spicy: true, bestseller: true, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop' },
      { id: 'chilli-garlic-chowmein', name: 'Chilli Garlic Chowmein', price: 150, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    icon: '🍚',
    description: 'Fragrant Indo-Chinese fried rice',
    items: [
      { id: 'veg-fried-rice', name: 'Veg Fried Rice', price: 140, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop' },
      { id: 'paneer-fried-rice', name: 'Paneer Fried Rice', price: 170, veg: true, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop' },
      { id: 'mushroom-fried-rice', name: 'Mushroom Fried Rice', price: 160, veg: true, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop' },
      { id: 'schezwan-fried-rice', name: 'Schezwan Fried Rice', price: 160, veg: true, spicy: true, bestseller: true, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'paneer',
    name: 'Paneer Dishes',
    icon: '🧀',
    description: 'Rich, royal cottage-cheese curries',
    items: [
      { id: 'paneer-butter-masala', name: 'Paneer Butter Masala', variants: [{ label: 'Half', price: 175 }, { label: 'Full', price: 290 }], veg: true, popular: true, bestseller: true, image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop' },
      { id: 'shahi-paneer', name: 'Shahi Paneer', variants: [{ label: 'Half', price: 185 }, { label: 'Full', price: 300 }], veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'kadhai-paneer', name: 'Kadhai Paneer', description: 'Wok-tossed paneer with bell peppers', variants: [{ label: 'Half', price: 180 }, { label: 'Full', price: 295 }], veg: true, popular: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'paneer-do-pyaza', name: 'Paneer Do Pyaza', variants: [{ label: 'Half', price: 180 }, { label: 'Full', price: 290 }], veg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'palak-paneer', name: 'Palak Paneer', description: 'Paneer in creamy spinach gravy', variants: [{ label: 'Half', price: 175 }, { label: 'Full', price: 285 }], veg: true, image: 'https://images.unsplash.com/photo-1645696301019-35adcc18b354?w=400&h=300&fit=crop' },
      { id: 'paneer-lababdar', name: 'Paneer Lababdar', variants: [{ label: 'Half', price: 190 }, { label: 'Full', price: 310 }], veg: true, image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop' },
      { id: 'paneer-bhurji', name: 'Paneer Bhurji', description: 'Scrambled paneer with masala', price: 220, veg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'paneer-tikka-masala', name: 'Paneer Tikka Masala', variants: [{ label: 'Half', price: 195 }, { label: 'Full', price: 315 }], veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop' },
      { id: 'paneer-angara', name: 'Paneer Angara', description: 'Smoky chargrilled paneer curry', variants: [{ label: 'Half', price: 200 }, { label: 'Full', price: 320 }], veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop' },
      { id: 'matar-paneer', name: 'Matar Paneer', variants: [{ label: 'Half', price: 170 }, { label: 'Full', price: 275 }], veg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'malai-kofta', name: 'Malai Kofta', variants: [{ label: 'Half', price: 185 }, { label: 'Full', price: 295 }], veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'paneer-kali-mirch', name: 'Paneer Kali Mirch', variants: [{ label: 'Half', price: 175 }, { label: 'Full', price: 290 }], veg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'kaju-kofta-shahi', name: 'Kaju Kofta Shahi', variants: [{ label: 'Half', price: 190 }, { label: 'Full', price: 310 }], veg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'mushroom',
    name: 'Mushroom Dishes',
    icon: '🍄',
    description: 'Hearty mushroom curries',
    items: [
      { id: 'mushroom-do-pyaza', name: 'Mushroom Do Pyaza', variants: [{ label: 'Half', price: 170 }, { label: 'Full', price: 280 }], veg: true, image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop' },
      { id: 'mushroom-masala', name: 'Mushroom Masala', variants: [{ label: 'Half', price: 170 }, { label: 'Full', price: 280 }], veg: true, popular: true, image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop' },
      { id: 'kadhai-mushroom', name: 'Kadhai Mushroom', variants: [{ label: 'Half', price: 175 }, { label: 'Full', price: 285 }], veg: true, image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop' },
      { id: 'mushroom-rogan-josh', name: 'Mushroom Rogan Josh', variants: [{ label: 'Half', price: 185 }, { label: 'Full', price: 295 }], veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop' },
      { id: 'mushroom-butter-masala', name: 'Mushroom Butter Masala', variants: [{ label: 'Half', price: 170 }, { label: 'Full', price: 285 }], veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop' },
      { id: 'mushroom-kali-mirch', name: 'Mushroom Kali Mirch', variants: [{ label: 'Half', price: 170 }, { label: 'Full', price: 285 }], veg: true, image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'veg-dishes',
    name: 'Veg Dishes',
    icon: '🥔',
    description: 'Traditional vegetable mains',
    items: [
      { id: 'mix-veg', name: 'Mix Veg', variants: [{ label: 'Half', price: 150 }, { label: 'Full', price: 250 }], veg: true, popular: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'veg-kolhapuri', name: 'Veg Kolhapuri', variants: [{ label: 'Half', price: 160 }, { label: 'Full', price: 260 }], veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'aloo-gobhi', name: 'Aloo Gobhi', variants: [{ label: 'Half', price: 140 }, { label: 'Full', price: 230 }], veg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'dum-aloo', name: 'Dum Aloo', variants: [{ label: 'Half', price: 150 }, { label: 'Full', price: 240 }], veg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
      { id: 'jeera-aloo', name: 'Jeera Aloo', price: 130, veg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'dal',
    name: 'Dal',
    icon: '🍲',
    description: 'Slow-cooked lentil delicacies',
    items: [
      { id: 'dal-fry', name: 'Dal Fry', variants: [{ label: 'Half', price: 120 }, { label: 'Full', price: 200 }], veg: true, popular: true, image: 'https://images.unsplash.com/photo-1626508035297-0cd27c397bb8?w=400&h=300&fit=crop' },
      { id: 'dal-tadka', name: 'Dal Tadka', variants: [{ label: 'Half', price: 130 }, { label: 'Full', price: 210 }], veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1626508035297-0cd27c397bb8?w=400&h=300&fit=crop' },
      { id: 'dal-makhani', name: 'Dal Makhani', description: 'Slow cooked black lentils in butter & cream', variants: [{ label: 'Half', price: 160 }, { label: 'Full', price: 260 }], veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1626508035297-0cd27c397bb8?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'breads',
    name: 'Indian Breads',
    icon: '🍞',
    description: 'Fresh tandoor breads & parathas',
    items: [
      { id: 'tandoori-roti', name: 'Tandoori Roti', price: 15, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 'butter-roti', name: 'Butter Roti', price: 20, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 'missi-roti', name: 'Missi Roti', price: 35, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 'plain-naan', name: 'Plain Naan', price: 50, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 'butter-naan', name: 'Butter Naan', price: 60, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 'garlic-naan', name: 'Garlic Naan', price: 75, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 'stuffed-naan', name: 'Stuffed Naan', price: 90, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 'aloo-paratha', name: 'Aloo Paratha', price: 60, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 'paneer-paratha', name: 'Paneer Paratha', price: 80, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 'gobhi-paratha', name: 'Gobhi Paratha', price: 65, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 'onion-paratha', name: 'Onion Paratha', price: 60, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { id: 'laccha-paratha', name: 'Laccha Paratha', price: 50, veg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'rice',
    name: 'Rice',
    icon: '🍚',
    description: 'Fluffy rice preparations',
    items: [
      { id: 'plain-rice', name: 'Plain Rice', price: 100, veg: true, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop' },
      { id: 'jeera-rice', name: 'Jeera Rice', price: 130, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop' },
      { id: 'veg-pulao', name: 'Veg Pulao', price: 150, veg: true, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop' },
      { id: 'paneer-pulao', name: 'Paneer Pulao', price: 180, veg: true, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'biryani',
    name: 'Biryani',
    icon: '🍛',
    description: 'Aromatic dum-cooked biryani',
    items: [
      { id: 'veg-biryani', name: 'Veg Biryani', price: 150, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop' },
      { id: 'paneer-biryani', name: 'Paneer Biryani', price: 180, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'raita',
    name: 'Raita',
    icon: '🥣',
    description: 'Cool, refreshing yogurt sides',
    items: [
      { id: 'masala-plain-raita', name: 'Masala Plain Raita', price: 55, veg: true, image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop' },
      { id: 'boondi-raita', name: 'Boondi Raita', price: 65, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop' },
      { id: 'onion-raita', name: 'Onion Raita', price: 60, veg: true, image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop' },
      { id: 'veg-raita', name: 'Veg Raita', price: 70, veg: true, image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop' },
      { id: 'plain-dahi', name: 'Plain Dahi', price: 50, veg: true, image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop' },
      { id: 'pineapple-raita', name: 'Pineapple Raita', price: 90, veg: true, image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop' },
      { id: 'fruit-raita', name: 'Fruit Raita', price: 110, veg: true, image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop' },
      { id: 'cucumber-raita', name: 'Cucumber Raita', price: 60, veg: true, image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'papad-salad',
    name: 'Papad & Salad',
    icon: '🥗',
    description: 'Crunchy starters & fresh salads',
    items: [
      { id: 'masala-papad', name: 'Masala Papad (2 pcs)', price: 70, veg: true, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop' },
      { id: 'roasted-papad', name: 'Roasted Papad', price: 25, veg: true, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop' },
      { id: 'fry-papad', name: 'Fry Papad', price: 30, veg: true, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop' },
      { id: 'green-salad', name: 'Green Salad', price: 80, veg: true, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop' },
      { id: 'onion-salad', name: 'Onion Salad', price: 40, veg: true, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'thali',
    name: 'Thali Culture',
    icon: '🍽️',
    description: 'Complete Indian platters with everything you crave',
    items: [
      {
        id: 'student-thali',
        name: 'Student Thali',
        description: 'Veg Gravy + Dal Fry + Plain Rice + 2 Tandoori Butter Roti / 1 Onion + Bandhi Raita + Pickle + 1 Papad',
        price: 130,
        veg: true,
        popular: true,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      },
      {
        id: 'premium-thali',
        name: 'Premium Thali',
        description: 'Paneer Butter Masala + Dal Fry + Jeera Rice + Mix Veg + 2 Tandoori Butter Roti + Onion + Boondi Raita + Pickle + 1 Papad + 1 Gulab Jamun',
        price: 230,
        veg: true,
        bestseller: true,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      },
      {
        id: 'special-thali',
        name: 'Special Thali',
        description: 'Paneer Butter Masala + Mix Veg + Dal Fry + Dal Makhani + Special Malai Kofta + Jeera Rice + 2 Baby Laccha + Baby Naan + 2 Tandoori Roti + Onion + Boondi Raita + Pickle + 2 Papad + 2 Gulab Jamun',
        price: 360,
        veg: true,
        bestseller: true,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      },
      {
        id: 'seasonal-thali',
        name: 'Seasonal Veg Thali',
        description: 'Seasonal Veg Gravy + Dal Fry + Rice + Raita + Pickle + Dessert',
        price: 180,
        veg: true,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      },
    ],
  },
  {
    id: 'street-food',
    name: 'Street Food Corner',
    icon: '🌭',
    description: 'Indian street eats made hygienic',
    items: [
      { id: 'veg-momos', name: 'Veg Momos (8 pcs)', price: 100, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop' },
      { id: 'paneer-momos', name: 'Paneer Momos (8 pcs)', price: 130, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop' },
      { id: 'chowmein-chilli-paneer', name: 'Chowmein with Chilli Paneer', price: 220, veg: true, spicy: true, image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=300&fit=crop' },
      { id: 'cf-combo', name: 'Burger + Chowmein + Momos Fries Combo', description: 'Loaded street-style sharing combo', price: 320, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰',
    description: 'Sweet endings to your meal',
    items: [
      { id: 'gulab-jamun', name: 'Gulab Jamun (2 pcs)', price: 60, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70952?w=400&h=300&fit=crop' },
      { id: 'gulab-jamun-ice-cream', name: 'Gulab Jamun with Ice Cream', price: 110, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'ice-cream',
    name: 'Ice Cream',
    icon: '🍨',
    description: 'Cool & creamy frozen treats',
    items: [
      { id: 'vanilla-ice', name: 'Vanilla Ice Cream', price: 60, veg: true, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop' },
      { id: 'chocolate-ice', name: 'Chocolate Ice Cream', price: 70, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop' },
      { id: 'strawberry-ice', name: 'Strawberry Ice Cream', price: 70, veg: true, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop' },
      { id: 'butterscotch-ice', name: 'Butterscotch Ice Cream', price: 80, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop' },
      { id: 'mango-ice', name: 'Mango Ice Cream', price: 80, veg: true, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    icon: '🥤',
    description: 'Refreshing drinks',
    items: [
      { id: 'mineral-water', name: 'Mineral Water (1L)', price: 20, veg: true, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },
      { id: 'soft-drinks', name: 'Soft Drinks', price: 40, veg: true, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },
      { id: 'fresh-lime-soda', name: 'Fresh Lime Soda', price: 60, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },
      { id: 'hot-coffee', name: 'Hot Coffee', price: 50, veg: true, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop' },
      { id: 'masala-tea', name: 'Masala Tea', price: 30, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop' },
      { id: 'green-tea', name: 'Green Tea', price: 40, veg: true, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop' },
    ],
  },
];

export const getAllItems = (): MenuItem[] => menuData.flatMap((c) => c.items);

export const getBestsellers = (): MenuItem[] =>
  getAllItems().filter((i) => i.bestseller).slice(0, 8);

export const getPopular = (): MenuItem[] =>
  getAllItems().filter((i) => i.popular || i.bestseller);

// Hero food categories for the visual carousel
export const foodCategories = [
  { id: 'paneer', name: 'North Indian', emoji: '🍛', color: 'from-orange-400 to-red-500', image: '/images/cat-north-indian.png' },
  { id: 'biryani', name: 'Biryani', emoji: '🍚', color: 'from-yellow-400 to-orange-500', image: '/images/cat-biryani.png' },
  { id: 'pizza', name: 'Pizza', emoji: '🍕', color: 'from-red-400 to-pink-500', image: '/images/cat-pizza.png' },
  { id: 'desserts', name: 'Desserts', emoji: '🍰', color: 'from-pink-400 to-rose-500', image: '/images/cat-desserts.png' },
  { id: 'burgers', name: 'Burger', emoji: '🍔', color: 'from-amber-400 to-orange-500', image: '/images/cat-burger.png' },
  { id: 'thali', name: 'Thali', emoji: '🍽️', color: 'from-emerald-400 to-teal-500', image: '/images/cat-thali.png' },
  { id: 'breads', name: 'Paratha', emoji: '🫓', color: 'from-yellow-500 to-amber-600', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop' },
  { id: 'ice-cream', name: 'Ice Cream', emoji: '🍨', color: 'from-sky-400 to-blue-500', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop' },
  { id: 'street-food', name: 'Street Food', emoji: '🥟', color: 'from-rose-400 to-red-500', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=400&fit=crop' },
  { id: 'noodles', name: 'Noodles', emoji: '🍜', color: 'from-orange-500 to-red-600', image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=400&fit=crop' },
  { id: 'beverages', name: 'Beverages', emoji: '🥤', color: 'from-cyan-400 to-blue-500', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop' },
  { id: 'snacks', name: 'Snacks', emoji: '🍟', color: 'from-amber-400 to-yellow-500', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop' },
];

// Real photo + gradient color for every menu category id (used by Explore Menu cards)
export const categoryImageMap: Record<string, { image: string; color: string }> = {
  'tandoor-starters':  { image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=400&fit=crop', color: 'from-red-500 to-orange-500' },
  'indian-starters':   { image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop', color: 'from-amber-500 to-red-500' },
  'snacks':            { image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&h=400&fit=crop', color: 'from-amber-400 to-yellow-500' },
  'rolls':             { image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop', color: 'from-orange-500 to-rose-500' },
  'soups':             { image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop', color: 'from-red-400 to-orange-400' },
  'burgers':           { image: '/images/cat-burger.png', color: 'from-amber-400 to-orange-500' },
  'fries':             { image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop', color: 'from-yellow-400 to-amber-500' },
  'sandwich':          { image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=400&fit=crop', color: 'from-yellow-500 to-orange-500' },
  'pizza':             { image: '/images/cat-pizza.png', color: 'from-red-400 to-pink-500' },
  'noodles':           { image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&h=400&fit=crop', color: 'from-orange-500 to-red-600' },
  'fried-rice':        { image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop', color: 'from-amber-500 to-orange-600' },
  'paneer':            { image: '/images/cat-north-indian.png', color: 'from-orange-400 to-red-500' },
  'mushroom':          { image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&h=400&fit=crop', color: 'from-stone-500 to-amber-700' },
  'veg-dishes':        { image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop', color: 'from-green-500 to-emerald-600' },
  'dal':               { image: 'https://images.unsplash.com/photo-1626508035297-0cd27c397bb8?w=600&h=400&fit=crop', color: 'from-yellow-600 to-amber-700' },
  'breads':            { image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop', color: 'from-yellow-500 to-amber-600' },
  'rice':              { image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=400&fit=crop', color: 'from-amber-300 to-yellow-500' },
  'biryani':           { image: '/images/cat-biryani.png', color: 'from-yellow-400 to-orange-500' },
  'raita':             { image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=600&h=400&fit=crop', color: 'from-sky-300 to-blue-400' },
  'papad-salad':       { image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop', color: 'from-lime-400 to-green-500' },
  'thali':             { image: '/images/cat-thali.png', color: 'from-emerald-400 to-teal-500' },
  'street-food':       { image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&h=400&fit=crop', color: 'from-rose-400 to-red-500' },
  'desserts':          { image: '/images/cat-desserts.png', color: 'from-pink-400 to-rose-500' },
  'ice-cream':         { image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop', color: 'from-sky-400 to-blue-500' },
  'beverages':         { image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop', color: 'from-cyan-400 to-blue-500' },
};

export const getCategoryImage = (id: string): { image: string; color: string } =>
  categoryImageMap[id] || { image: '/images/cat-thali.png', color: 'from-orange-400 to-red-500' };

export const offers = [
  {
    id: 1,
    title: 'Flat 20% OFF',
    subtitle: 'On orders above ₹399',
    code: 'CLOUDY20',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: 'Free Delivery',
    subtitle: 'No min. order on first purchase',
    code: 'WELCOME',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 3,
    title: 'Buy 1 Thali Get Gulab Jamun Free',
    subtitle: 'On Premium & Special Thali',
    code: 'THALI100',
    color: 'from-purple-500 to-pink-500',
  },
];

export const reviews = [
  { name: 'Yati Srivastava', rating: 5, text: 'The food quality and quantity both are best 😋. A1 service ❤️', source: 'Google' },
  { name: 'Mukul Patel', rating: 5, text: 'Delicious food 😘 Full hygienic, less oil, good atmosphere.', source: 'Google' },
  { name: 'Paritosh Jha', rating: 4, text: 'I have enjoyed their North Indian cuisine.', source: 'Google' },
  { name: 'Anjali Verma', rating: 5, text: 'Best Pure Veg restaurant in Jhalwa. Special Thali is a must try!', source: 'Zomato' },
  { name: 'Rohit Singh', rating: 5, text: 'Great ambience, super tasty Paneer Tikka Masala.', source: 'Swiggy' },
  { name: 'Pooja Sharma', rating: 4, text: 'Loved the malai kofta and Cloudy Special Burger 🍔', source: 'Justdial' },
];
