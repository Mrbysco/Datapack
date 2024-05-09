---
outline: deep
---

# Installing a datapack 
One of the ways of loading a datapack into Modded Minecraft is using the **Global Packs** mod by **JTK222**.

## Using Global Packs

Global Packs loads Datapacks from the `~/global_packs/required_data/` and `~/global_packs/optional_data/` folders in your game instance folder.

If you don't want to create a new folder **Global Packs** also loads datapacks that are located in the `resourcepacks` folder.

The following steps will guide you through installing a datapack using Global Packs:

### 1. **Install Global Packs:**
  - **CurseForge**
    - Install the mod from [CurseForge](https://www.curseforge.com/minecraft/mc-mods/drp-global-datapack) either manually or through the CurseForge launcher or your mod launcher of choice.
  - **Modrinth**
    - Install the mod from [Modrinth](https://modrinth.com/mod/globalpacks).

### 2. **Locate the instance folder:**
   - **Minecraft Launcher:**
     - Open the Minecraft Launcher.
     - Navigate to the Installations tab.
     - Hover over the desired installation and click the folder icon.
   - **In-Game:**
     - Go to Resource Packs.
     - Press the Open Pack Folder button.
     - Navigate a folder back where you can see the `config` and `saves` folders.

### 3. **Create the `global_packs/required_data` or `global_packs/optional_data` folder:**
  - Create the `global_packs` folder and open it
  - Create the `required_data` or `optional_data` folder (depending if you want your datapack to be optional or not)
  - Open the folder

### **Alternatively - Locate the `resourcepacks` folder:**
> Skip if using `globalpacks` folder
  - Open the `resourcepacks` folder

### 5. **Copy Datapack:**
   - Copy the datapack into the folder.

## Additional Methods (Windows)
> [!NOTE]
> This is assuming you're using the Minecraft Launcher and have not changed the Game Directory

- **Using Run Command:**
  - Press **Windows + R** to open the Run dialog.
  - Enter `%appdata%\.minecraft` and click OK.

- **Using File Explorer:**
  - Open any folder (File Explorer).
  - Enter `%appdata%\.minecraft` in the address bar and press Enter.

## Additional Method (MacOS)
> [!NOTE]
> This is assuming you're using the Minecraft Launcher and have not changed the Game Directory

- **Using Spotlight:**
  - Copy `~/Library/Application Support/minecraft` into Spotlight search.
  - Press Enter to access the Minecraft directory.