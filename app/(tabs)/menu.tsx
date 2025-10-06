import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const menuData = [
  // ---------- STARTERS ----------
  {
    category: "STARTERS",
    image: require('@/assets/images/starters.jpg'),
    items: [
      {
        name: "Velvet Beet Carpaccio",
        description: "Golden beetroot ribbons, goat cheese mousse, candied walnuts, bourbon glaze.",
        price: "R185",
      },
      {
        name: "Champagne Oysters",
        description: "Fresh Knysna oysters, Champagne mignonette, caviar pearls, micro herbs.",
        price: "R195",
      },
      {
        name: "Golden Arancini Balls",
        description: "Saffron risotto pearls with truffle oil, parmesan crisp, tomato coulis.",
        price: "R175",
      },
      {
        name: "Burrata & Heirloom Tomato",
        description: "Creamy burrata with heirloom tomatoes, basil oil, and sourdough crisps.",
        price: "R165",
      },
      {
        name: "Silken Lobster Bisque (Soup)",
        description: "Cognac-flamed lobster soup, saffron cream, sea fennel garnish.",
        price: "R210",
      },
    ],
  },

  // ---------- MAINS ----------
  {
    category: "MAINS",
    image: require('@/assets/images/mains.jpg'),
    items: [
      {
        name: "Saffron Lobster Tagliatelle",
        description: "Handmade tagliatelle, Norwegian lobster, saffron cream, olive oil.",
        price: "R295",
      },
      {
        name: "Heritage Pork Belly",
        description: "Slow-braised heritage pork, apple & fennel slaw, red wine jus.",
        price: "R275",
      },
      {
        name: "Charred Line-Caught Yellowtail",
        description: "Seared yellowtail fillet, yuzu emulsion, pickled vegetables.",
        price: "R285",
      },
      {
        name: "Wild Mushroom & Truffle Risotto",
        description: "Arborio rice, wild mushrooms, black truffle oil, aged Parmesan.",
        price: "R265",
      },
      {
        name: "Seared Duck Breast with Cherry Gastrique",
        description: "Free-range duck, cherry reduction, roasted carrots, star anise jus.",
        price: "R310",
      },
    ],
  },

  // ---------- DESSERTS ----------
  {
    category: "DESSERTS",
    image: require('@/assets/images/desserts.jpg'),
    items: [
      {
        name: "Gold Dusted Chocolate Decadence",
        description: "70% dark chocolate ganache tart, gold dust, raspberry coulis.",
        price: "R165",
      },
      {
        name: "Saffron Panna Cotta",
        description: "Silky saffron panna cotta, mango compote, pistachio crumble.",
        price: "R145",
      },
      {
        name: "Caramelized Fig Tart",
        description: "Buttery pastry, caramelized figs, honey mascarpone, toasted almonds.",
        price: "R155",
      },
      {
        name: "Lavender & Honey Crème Brûlée",
        description: "Lavender-infused custard, wildflower honey, caramelized sugar crown.",
        price: "R160",
      },
      {
        name: "Chestnut & Pear Mille-Feuille",
        description: "Crisp puff pastry, chestnut cream, roasted pear compote.",
        price: "R170",
      },
    ],
  },

  // ---------- WINES ----------
  {
    category: "WINES",
    image: require('@/assets/images/wines.jpg'),
    items: [
      {
        name: "Estate Chardonnay 2019",
        description: "Plush, barrel-fermented Chardonnay with citrus and almond tones.",
        price: "R520",
      },
      {
        name: "Pinot Noir Reserve 2018",
        description: "Silky Pinot Noir with forest-fruit notes and elegant spice.",
        price: "R680",
      },
      {
        name: "Sancerre Blanc 2020",
        description: "Bright and mineral, flinty Sancerre with citrus clarity.",
        price: "R610",
      },
      {
        name: "Syrah Old Vines 2017",
        description: "Full-bodied Syrah, black fruit, pepper, mocha undertone.",
        price: "R750",
      },
      {
        name: "Vintage Port 2005",
        description: "Rich, fortified Port with dried fruit and nutmeg depth.",
        price: "R890",
      },
    ],
  },

  // ---------- SIGNATURE DRINKS ----------
  {
    category: "SIGNATURE DRINKS",
    image: require('@/assets/images/drinks.jpg'),
    items: [
      {
        name: "Golden Hour Negroni",
        description: "Gin, vermouth, and bitters with orange blossom and gold shimmer.",
        price: "R190",
      },
      {
        name: "Saffron Martini",
        description: "Saffron-infused vodka with dry vermouth, floral and smooth.",
        price: "R210",
      },
      {
        name: "Cape Gimlet (Signature Mocktail)",
        description: "Lime, Cape nectar syrup, tonic, and rosemary — light and fizzy.",
        price: "R140",
      },
      {
        name: "Smoked Tea Old Fashioned",
        description: "Aged bourbon, smoked tea, spiced syrup — smoky and warming.",
        price: "R230",
      },
      {
        name: "Citrus & Thyme Spritz",
        description: "Citrus cordial, thyme foam, sparkling water — refreshing and bright.",
        price: "R160",
      },
    ],
  },
];

export default function MenuScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Image
        source={require('@/assets/images/appetizers.jpg')}
        style={styles.headerImage}
      />
      <Text style={styles.menuTitle}>Our Menu</Text>
      <Text style={styles.menuSubtitle}>Curated Culinary Excellence</Text>

      {menuData.map((section, index) => (
        <View key={index} style={{ marginBottom: 32 }}>
          <Image source={section.image} style={styles.categoryImage} />
          <Text style={styles.categoryTitle}>{section.category}</Text>

          {section.items.map((item, i) => (
            <View key={i} style={styles.card}>
              <Text style={styles.dishName}>{item.name}</Text>
              <Text style={styles.dishDescription}>{item.description}</Text>
              <Text style={styles.dishPrice}>{item.price}</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  router.push({
                    pathname: '/DishDetailScreen',
                    params: {
                      name: item.name,
                      description: item.description,
                      price: item.price,
                      image: Image.resolveAssetSource(section.image).uri, // category image
                    },
                  })
                }
              >
                <Text style={styles.buttonText}>Discover This Dish</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#003c2f' },
  headerImage: { width: '100%', height: 220, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  menuTitle: { fontSize: 28, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginTop: 12 },
  menuSubtitle: { fontSize: 16, color: '#d1d5db', textAlign: 'center', marginBottom: 20 },
  categoryImage: { width: '90%', height: 150, borderRadius: 16, alignSelf: 'center', marginBottom: 12 },
  categoryTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFD700', marginLeft: 16, marginBottom: 12 },
  card: { backgroundColor: '#004d40', marginHorizontal: 16, marginBottom: 16, borderRadius: 14, padding: 16 },
  dishName: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 6 },
  dishDescription: { fontSize: 14, color: '#d1d5db', marginBottom: 8 },
  dishPrice: { fontSize: 16, fontWeight: 'bold', color: '#FFD700', marginBottom: 10 },
  button: { backgroundColor: '#2b1810', paddingVertical: 10, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});
