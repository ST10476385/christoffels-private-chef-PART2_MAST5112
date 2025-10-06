import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

// ---------- DISH DETAILS ----------
const dishDetails: Record<string, any> = {
  // STARTERS
  "Velvet Beet Carpaccio": {
    story: "A quiet ode to autumn sunsets — thin ribbons of golden beetroot, slow-roasted...",
    ingredients: [
      "Golden beetroot — Stellenbosch organic growers",
      "Goat cheese mousse — small-batch Karoo dairy",
      "Candied walnuts with wild honey",
      "Microgreens (daily harvest)",
      "Aged bourbon glaze",
      "Finish: Maldon sea salt, cracked pepper",
    ],
    origin: "Beetroot is sourced from cool highland soils in the Western Cape...",
    pairing: "Light Sauvignon Blanc or a delicate rosé; our pick: a minerally Sancerre.",
  },
  "Champagne Oysters": {
    story: "A coastal ceremony — dawn-harvested oysters from Knysna...",
    ingredients: [
      "Knysna oysters (sustainably harvested)",
      "Champagne mignonette (shallot pearls, Champagne vinegar)",
      "Tiny caviar pearls",
      "Micro herbs & lemon mist",
      "Sea salt harvested from Mossel Bay",
    ],
    origin: "Oysters hand-harvested at low tide from Knysna’s sheltered estuaries...",
    pairing: "Brut Champagne or a crisp Chablis.",
  },
  "Golden Arancini Balls": {
    story: "Comfort and ceremony collide. Creamy saffron risotto is rolled into pearls...",
    ingredients: [
      "Saffron-infused risotto (Kashmiri saffron threads)",
      "Aged Parmesan crisp",
      "White truffle oil (finishing)",
      "Heritage tomato coulis",
      "Panko crust & brown butter",
    ],
    origin: "Saffron sourced from highland growers; tomatoes from heirloom plots...",
    pairing: "Barbera or a light, rounded Chardonnay.",
    image: require('@/assets/images/golden-arancini.jpg'),
  },
  "Burrata & Heirloom Tomato": {
    story: "A summer reverie no matter the season — creamy burrata split open...",
    ingredients: [
      "Creamy burrata (local artisanal creamery)",
      "Vine-ripened heirloom tomatoes",
      "Extra virgin basil oil",
      "Aged balsamic reduction",
      "Sourdough crisps & micro basil",
    ],
    origin: "Burrata from a local small-batch dairy; tomatoes sourced from greenhouses...",
    pairing: "Young Chianti or a dry Vermentino.",
  },
  "Silken Lobster Bisque (Soup)": {
    story: "A velvet bisque — lobster shells roasted to deepen aromatics...",
    ingredients: [
      "Lobster stock (roasted shells)",
      "Seared lobster meat",
      "Cognac flamed",
      "Double cream & saffron threads",
      "Sea fennel for garnish",
    ],
    origin: "Lobster sourced sustainably from cold North-Atlantic waters...",
    pairing: "Oaked Chardonnay or a light Viognier.",
  },

  // MAINS
  "Saffron Lobster Tagliatelle": {
    story: "Inspired by Amalfi’s coastal kitchens, hand-cut tagliatelle embraces saffron cream...",
    ingredients: [
      "Handmade tagliatelle",
      "Norwegian lobster tail (sustainably harvested)",
      "Saffron cream (Kashmiri threads)",
      "Cold-pressed olive oil",
      "Lemon zest & micro herbs",
    ],
    origin: "Lobster from Nordic waters; saffron from select high-altitude growers...",
    pairing: "Oaked Chardonnay or Viognier.",
  },
  "Heritage Pork Belly": {
    story: "Slow-braised until unctuous, the heritage pork belly is finished with a caramelized crackle...",
    ingredients: [
      "Heritage pork belly",
      "Apple & fennel slaw",
      "Red wine jus (reduced)",
      "Roasted seasonal vegetables",
      "Micro herbs",
    ],
    origin: "Heritage pork from free-range farms practicing ethical rearing...",
    pairing: "Pinot Noir or a medium-bodied Merlot.",
  },
  "Charred Line-Caught Yellowtail": {
    story: "A charred fillet with a translucence that sings...",
    ingredients: [
      "Line-caught yellowtail",
      "Yuzu emulsion",
      "Charred baby leeks",
      "Pickled seasonal vegetables",
      "Sesame tuile",
    ],
    origin: "Fish sourced from small-line fisheries along temperate coasts...",
    pairing: "Gewürztraminer or a crisp Sake Junmai.",
  },
  "Wild Mushroom & Truffle Risotto": {
    story: "A woodland story on a plate — arborio rice slow-cooked to creamy perfection...",
    ingredients: [
      "Arborio rice",
      "Wild mushrooms (foraged blends)",
      "Black truffle oil",
      "Aged Parmesan 24 months",
      "White wine & thyme",
    ],
    origin: "Mushrooms responsibly foraged or sourced from specialist growers...",
    pairing: "Nebbiolo or an earthy Pinot Noir.",
  },
  "Seared Duck Breast with Cherry Gastrique": {
    story: "A dish of contrasts — the duck breast is seared to a crisped skin...",
    ingredients: [
      "Free-range duck breast",
      "Cherry gastrique",
      "Roasted heritage carrots",
      "Reduction of duck jus & star anise",
    ],
    origin: "Duck from artisanal farms; cherries sourced from cold-stored orchards...",
    pairing: "Syrah or a matured Grenache.",
  },

  // DESSERTS
  "Gold Dusted Chocolate Decadence": {
    story: "A dramatic finale — 70% Madagascar dark chocolate ganache...",
    ingredients: [
      "70% Madagascar dark chocolate",
      "Butter pastry shell",
      "Fresh raspberry coulis",
      "Edible gold dust",
      "Vanilla bean gelato",
    ],
    origin: "Chocolate sourced from single-origin Madagascar cocoa...",
    pairing: "Vintage Port or a bold espresso.",
  },
  "Saffron Panna Cotta": {
    story: "Silky panna cotta infused with saffron, resting on a bright mango compote...",
    ingredients: [
      "Double cream & milk",
      "Saffron threads",
      "Mango compote",
      "Pistachio crumble",
      "Orange oil",
    ],
    origin: "Saffron threads and mangoes sourced from specialty growers...",
    pairing: "Late-harvest Riesling or a citrusy Moscato.",
  },
  "Caramelized Fig Tart": {
    story: "Buttery pastry meets the caramel warmth of fig and honey mascarpone cream...",
    ingredients: [
      "Butter shortcrust pastry",
      "Caramelized figs",
      "Honey mascarpone cream",
      "Toasted almonds",
      "Orange zest",
    ],
    origin: "Figs from sun-drenched orchards; mascarpone from local dairies.",
    pairing: "Amber dessert wine or a late-harvest Chenin Blanc.",
  },
  "Lavender & Honey Crème Brûlée": {
    story: "A classic with a fragrant twist — silky custard infused with lavender...",
    ingredients: [
      "Free-range egg yolks",
      "Cream & milk",
      "Lavender infusion",
      "Caramelized sugar",
      "Wildflower honey drizzle",
    ],
    origin: "Honey from coastal wildflower apiaries; lavender from highland gardens.",
    pairing: "Eiswein or a delicate Muscat.",
  },
  "Chestnut & Pear Mille-Feuille": {
    story: "Layers of crisp puff pastry and silky chestnut cream folded around roasted pear...",
    ingredients: [
      "Puff pastry",
      "Chestnut cream",
      "Roasted pear compote",
      "Vanilla bean",
      "Icing sugar dust",
    ],
    origin: "Chestnuts from temperate orchards; pears picked at the peak of sweetness.",
    pairing: "A tawny Port or aged sherry.",
  },

  // WINES
  "Estate Chardonnay 2019": {
    story: "A plush, barrel-fermented Chardonnay with a backbone of citrus...",
    tasting: [
      "Nose: baked apple, vanilla bean, toasted almond",
      "Palate: citrus core, creamy mid-palate, fine tannins",
      "Finish: long, mineral-driven",
    ],
    origin: "Crafted from coastal vineyards...",
    pairing: "Saffron lobster tagliatelle, lobster bisque, or roasted chicken.",
  },
  "Pinot Noir Reserve 2018": {
    story: "A silky, refined Pinot with forest-fruit notes and a subtle earthiness...",
    tasting: [
      "Nose: wild cherry, forest floor",
      "Palate: red berries, silky texture",
      "Finish: gentle spice",
    ],
    origin: "From higher-altitude rows that yield delicate aromatic wines.",
    pairing: "Heritage pork belly or wild mushroom risotto.",
  },
  "Sancerre Blanc 2020": {
    story: "A razor-bright Sancerre with flinty minerality and citrus clarity...",
    tasting: ["Nose: lime blossom, flint", "Palate: lime, green apple", "Finish: saline acidity"],
    origin: "Gravelly terroir of Loire-inspired clones.",
    pairing: "Velvet Beet Carpaccio or Champagne Oysters.",
  },
  "Syrah Old Vines 2017": {
    story: "A full-bodied Syrah from old vines, delivering black fruit, pepper spice...",
    tasting: ["Nose: blackberry, black pepper", "Palate: dark fruit, leather", "Finish: robust, lingering"],
    origin: "Sun-warmed slopes producing concentrated grapes.",
    pairing: "Seared duck breast or charred yellowtail with rich jus.",
  },
  "Vintage Port 2005": {
    story: "A luxurious fortified wine with layers of dried fruit, nutmeg and caramel...",
    tasting: ["Nose: figs, caramel", "Palate: dense fruit, spice", "Finish: opulent, long"],
    origin: "Selected from estate-grown vineyards and aged with care.",
    pairing: "Gold Dusted Chocolate Decadence or chestnut mille-feuille.",
  },

  // SIGNATURE DRINKS
  "Golden Hour Negroni": {
    story: "A refined Negroni riff finished with orange blossom and a touch of edible gold shimmer...",
    tasting: ["Aromas: bitter orange, oak", "Palate: juniper backbone, rounded bitterness, citrus finish"],
    origin: "Crafted with a house vermouth blend and small-batch gin.",
    pairing: "Golden Arancini Balls or Burrata & Heirloom Tomato.",
  },
  "Saffron Martini": {
    story: "A luminous martini where saffron-infused vodka meets a whisper of dry vermouth...",
    tasting: ["Nose: saffron, citrus peel", "Palate: silky spice, dry finish"],
    origin: "Saffron macerated in premium neutral spirit for 48 hours.",
    pairing: "Saffron Lobster Tagliatelle or lobster bisque.",
  },
  "Cape Gimlet (Signature Mocktail)": {
    story: "A bright non-alcoholic creation — lime, Cape nectar syrup and tonic distilled with a sprig of rosemary...",
    tasting: ["Nose: lime & rosemary", "Palate: tangy, delicate herb finish"],
    origin: "Citrus and botanicals sourced from local gardens.",
    pairing: "Champagne Oysters or Silken Lobster Bisque.",
  },
  "Smoked Tea Old Fashioned": {
    story: "A contemplative cocktail — black tea smoked over oak chips...",
    tasting: ["Aromas: smoke, caramel", "Palate: oak, dark sugar, spice"],
    origin: "Tea smoked in-house from single-origin leaves.",
    pairing: "Seared duck or Gold Dusted Chocolate Decadence.",
  },
  "Citrus & Thyme Spritz": {
    story: "A light, effervescent spritz with citrus cordial, thyme foam and sparkling water...",
    tasting: ["Nose: lemon peel, thyme", "Palate: bright, herbal finish"],
    origin: "Herbs from our garden beds; citrus from local groves.",
    pairing: "Burrata & Heirloom Tomato or Golden Arancini Balls.",
  },
};

// ---------- DISH DETAIL SCREEN ----------
export default function DishDetailScreen() {
  const { name, description, price } = useLocalSearchParams();
  const router = useRouter();

  const key = (name as string) || '';
  const details = dishDetails[key];

  const story = details?.story || "This dish is a signature creation from our kitchen.";
  const ingredients = details?.ingredients || [];
  const origin = details?.origin || "We source only the best ingredients.";
  const pairing = details?.pairing || details?.winePairing || details?.tasting || "Ask your server for recommended pairings.";

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.content}>
        <Text style={styles.name}>{key || 'Chef Special'}</Text>
        {price ? <Text style={styles.price}>{price}</Text> : null}
        {description ? <Text style={styles.description}>{description}</Text> : null}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Chef’s Story</Text>
          <Text style={styles.sectionText}>{story}</Text>
        </View>

        {ingredients.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredients & Provenance</Text>
            {ingredients.map((ing: string, idx: number) => <Text key={idx} style={styles.ingredient}>• {ing}</Text>)}
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Origin</Text>
          <Text style={styles.sectionText}>{origin}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pairing / Tasting Notes</Text>
          {Array.isArray(pairing) ? pairing.map((p, i) => <Text key={i} style={styles.ingredient}>• {p}</Text>) : <Text style={styles.sectionText}>{pairing}</Text>}
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>← Back to Menu</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// ---------- STYLES ----------
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#001f17' },
  content: { padding: 22 },
  name: { fontSize: 30, fontWeight: '700', color: '#FFD700', marginBottom: 6, letterSpacing: 0.6 },
  price: { fontSize: 18, color: '#fff', marginBottom: 10 },
  description: { fontSize: 15, color: '#d7d7d7', marginBottom: 16, lineHeight: 22 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, color: '#FFD700', fontWeight: '600', marginBottom: 8 },
  sectionText: { fontSize: 15, color: '#eaeaea', lineHeight: 22 },
  ingredient: { fontSize: 15, color: '#d7d7d7', marginBottom: 6 },
  backButton: { backgroundColor: '#2b1810', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginTop: 8 },
  backButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
