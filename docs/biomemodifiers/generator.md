<script setup>
import { ref, computed } from 'vue'

const loader = ref('neoforge')
const type = ref('add_features')
const biomes = ref('')
const features = ref('')
const decorationStep = ref('')
const entityType = ref('')
const maxCount = ref('')
const minCount = ref('')
const weight = ref('')
const entityTypes = ref('')

const decorationText = computed(() => {
  let text = 'Decoration Step: '
  if (type.value == 'remove_features') {
    text += " (Optional)"
  }
  return text
})

const output = computed(() => {
  var match = /\r|\n/;

  const biomesEmpty = biomes.value.length == 0
  if (biomesEmpty) {
    return "Please insert at least 1 biome / biome tag"
  }
  const featuresEmpty = features.value.length == 0
  const decorationStepEmpty = decorationStep.value.length == 0
  if (type.value == 'add_features') {
    if (featuresEmpty) {
      return "Please insert a feature"
    } else if (decorationStepEmpty) {
      return "Please select a decoration step!"
    } else {
      return JSON.stringify({
        type: loader.value + ":" + type.value,
        biomes: match.exec(biomes.value) ? biomes.value.toLowerCase().split(/\r?\n/) : biomes.value.toLowerCase(),
        features: match.exec(features.value) ? features.value.toLowerCase().split(/\r?\n/) : features.value.toLowerCase(),
        decoration: decorationStep.value
      }, null, 4)
    }
  } else if (type.value == 'remove_features') {
    if (featuresEmpty) {
      return "Please insert a feature"
    } else {
      if (decorationStep.value.length > 0) {
        return JSON.stringify({
          type: loader.value + ":" + type.value,
          biomes: match.exec(biomes.value) ? biomes.value.toLowerCase().split(/\r?\n/) : biomes.value.toLowerCase(),
          features: match.exec(features.value) ? features.value.toLowerCase().split(/\r?\n/) : features.value.toLowerCase(),
          steps: decorationStep.value.length > 0 ? decorationStep.value : ''
        }, null, 2)
      } else {
        return JSON.stringify({
          type: loader.value + ":" + type.value,
          biomes: match.exec(biomes.value) ? biomes.value.toLowerCase().split(/\r?\n/) : biomes.value.toLowerCase(),
          features: match.exec(features.value) ? features.value.toLowerCase().split(/\r?\n/) : features.value.toLowerCase()
        }, null, 4)
      }
    }
  } else if (type.value == 'add_spawns') {
    if (entityType.value.length == 0) {
      return "Please insert an entity type"
    } else if (weight.value.length == 0) {
      return "Please specify the spawn weight"
    } else if  (minCount.value.length == 0) {
      return "Please specify the min count"
    } else if (maxCount.value.length == 0) {
      return "Please specify the max count"
    } else {
     return JSON.stringify({
        type: loader.value + ":" + type.value,
        biomes: match.exec(biomes.value) ? biomes.value.toLowerCase().split(/\r?\n/) : biomes.value.toLowerCase(),
        spawners: {
          type: entityType.value.toLowerCase(),
          maxCount: maxCount.value,
          minCount: minCount.value,
          weight: weight.value,
        }
      }, null, 4)
    }
  } else if (type.value == 'remove_spawns') {
    if (entityTypes.value.length == 0) {
      return "Please insert at least 1 entity type"
    } else {
      return JSON.stringify({
        type: loader.value + ":" + type.value,
        entity_types: match.exec(entityTypes.value) ? entityTypes.value.split(/\r?\n/) : entityTypes.value
      }, null, 4)
    }
  }
  
  return ""
})
</script>

# Simple Biome Modifier generator
The following is a form that can generate some simple biome modifier types. Please make sure that the biome/biome tag/features/entity-types you insert actually exists.

**Disclaimer:** This tool does not perform validity checks on the generated JSON. Please review and test the output carefully to ensure it works as intended. Use with caution.
> [!NOTE]
> For a list of valid vanilla tags you can check the [wiki](https://minecraft.wiki/w/Tag#Biomes)

<hr>
Forge loader: 
<select name="forge loader" id="forge-loader" v-model="loader">
    <option value="neoforge">neoforge</option>
    <option value="forge">forge</option>
</select><br>
Modifier Type:
<select name="modifier-type" id="modifier-type" v-model="type">
    <option value="add_features">add_features</option>
    <option value="remove_features">remove_features</option>
    <option value="add_spawns">add_spawns</option>
    <option value="remove_spawns">remove_spawns</option>
</select><br>
Biomes: 
<textarea name="biomes" type="text" rows="1" cols="30" placeholder="#minecraft:is_jungle" v-model="biomes"/><br>
<div v-if="type == 'add_features' || type == 'remove_features'">
Features: 
<textarea name="features" type="text" rows="1" cols="30" placeholder="minecraft:bamboo_vegetation" v-model="features"/><br>
{{ decorationText }}
<select name="decoration-step" id="decoration-step" v-model="decorationStep">
    <option value="lakes">lakes</option>
    <option value="local_modifications">local_modifications</option>
    <option value="underground_structures">underground_structures</option>
    <option value="surface_structures">surface_structures</option>
    <option value="strongholds">strongholds</option>
    <option value="underground_ores">underground_ores</option>
    <option value="underground_decoration">underground_decoration</option>
    <option value="fluid_springs">fluid_springs</option>
    <option value="vegetal_decoration">vegetal_decoration</option>
    <option value="top_layer_modification">top_layer_modification</option>
</select><button v-if="type == 'remove_features'" @click="decorationStep = ''" class="btn">Clear</button><br>
</div>
<div v-if="type == 'add_spawns'">
    Entity: 
    <input id="entity-type" type="text" placeholder="minecraft:parrot" v-model="entityType"><br>
    Weight: 
    <input id="weight" type="number" placeholder="40" v-model="weight"><br>
    Min count: 
    <input id="min-count" type="number" placeholder="1" v-model="minCount"><br>
    Max Count: 
    <input id="max-count" type="number" placeholder="2" v-model="maxCount"><br>
</div>
<div v-if="type == 'remove_spawns'">
    Entities: 
    <textarea id="entity-type" type="text" rows="1" cols="30" placeholder="minecraft:parrot" v-model="entityTypes"/><br>
</div>
<br>
<hr>
<div class="language-json vp-adaptive-theme">
  <button title="Copy Code" class="copy"></button><span class="lang">json</span>
  <pre class="shiki shiki-themes github-light github-dark vp-code">{{ output }}</pre>
</div>

<div class="info">

<div v-if="type == 'add_features'">

## Add Features

The `add_features` biome modifier type allows you to add placed features to biomes.

The parameters required are the following:

* **biomes** - Accepts a biome id, [list of biome ids], or #namespace:biome_tag
* **features** - Accepts a placed feature id, [list of placed feature ids], or #namespace:feature_tag
* **step** - Specifies the generation step the feature will get added into (See generation steps section of the [wiki](https://minecraft.wiki/w/Custom_biome) )

An example of a biome modifier that mimics how bamboo gets added to jungles in code:
```json
{
    "type": "neoforge:add_features",
    "biomes": "#minecraft:is_jungle",
    "features": "minecraft:bamboo_vegetation",
    "decoration": "vegetal_decoration"
}
```

</div>
<div v-if="type == 'remove_features'">

## Remove Features

The `remove_features` biome modifier type allows you to remove placed features from biomes.

The parameters required are the following:

* **biomes** - Accepts a biome id, [list of biome ids], or #namespace:biome_tag
* **features** - Accepts a placed feature id, [list of placed feature ids], or #namespace:feature_tag
* **step** - Specifies the generation step the feature will be removed from (See generation steps section of the [wiki](https://minecraft.wiki/w/Custom_biome) )

An example of a biome modifier that will remove bamboo from jungles
```json
{
    "type": "neoforge:remove_features",
    "biomes": "#minecraft:is_jungle",
    "features": "minecraft:bamboo_vegetation",
    "decoration": "vegetal_decoration"
}
```

</div>
<div v-if="type == 'add_spawns'">

## Add spawns

The `add_spawns` biome modifier type allows you to add mob spawns to a biome.

The parameters required are the following:

* **biomes** - Accepts a biome id, [list of biome ids], or #namespace:biome_tag
* **type** - Type of mob to spawn
* **weight** - The spawn weight (must be above 0)
* **minCount** - The minimum group size (must be above 0)
* **maxCount** - The maximum group size (must be above 0)

An example of a biome modifier that that mimics how cows are added to jungles in code:
```json
{
    "type": "neoforge:add_spawns",
    "biomes": "#minecraft:is_jungle",
    "spawners": {
        "type": "minecraft:cow",
        "maxCount": 4,
        "minCount": 4,
        "weight": 8
    }
}
```

</div>
<div v-if="type == 'remove_spawns'">

## Remove spawns

The `remove_spawns` biome modifier type allows you to remove mob spawns from a biome.

The parameters required are the following:

* **biomes** - Accepts a biome id, [list of biome ids], or #namespace:biome_tag
* **entity_types** - Accepts a entity id, [list of entity ids], or a #namespace:entity_tag

An example of a biome modifier that that will remove cows from jungles
```json
{
    "type": "neoforge:remove_spawns",
    "biomes": "#minecraft:is_jungle",
    "entity_types": "minecraft:cow"
}
```

</div>

</div>



<style>
.btn {
    border: 1px solid #161618;
    border-radius: 4px;
    padding: 0 6px;
    margin-left: 4px;
}
select {
    padding: 0 6px;
    border-radius: 4px;
}
input, textarea, select {
    border: 1px solid #161618;
    border-radius: 4px;
}
input::placeholder, textarea::placeholder {
    padding: 4px;
    color: #52515b;
}
</style>