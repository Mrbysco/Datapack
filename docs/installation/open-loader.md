---
outline: deep
---

# Installing a datapack 
One of the ways of loading a datapack into Modded Minecraft is using the **Open Loader** mod by **DarkHax**.
> [!NOTE]
> Part of the info is derived from info on Open Loader's [wiki](https://github.com/Darkhax-Minecraft/Open-Loader/wiki/Creating-Datapacks) and [Curseforge](https://www.curseforge.com/minecraft/mc-mods/open-loader) description

## Using Open Loader

Open Loader loads Datapacks from the `~/config/openloader/data` folder in your game instance.

The following steps will guide you through installing a datapack using Open Loader:

### 1. **Install Open Loader:**
  - **CurseForge**
    - Install the mod from [CurseForge](https://www.curseforge.com/minecraft/mc-mods/open-loader) either manually or through the CurseForge launcher or your mod launcher of choice.
    - Start up the game once.
  - **Modrinth**
    - Install the mod from [Modrinth](https://modrinth.com/mod/open-loader).
    - Start up the game once.

### 2. **Locate the instance folder:**
   - **Minecraft Launcher:**
     - Open the Minecraft Launcher.
     - Navigate to the Installations tab.
     - Hover over the desired installation and click the folder icon.
   - **In-Game:**
     - Go to Resource Packs.
     - Press the Open Pack Folder button.
     - Navigate a folder back where you can see the `config` and `saves` folders.

### 3. **Locate the `openloader/data` folder:**
> [!IMPORTANT]
> Before 1.17 Open Loader loaded Datapacks from `~/openloader/data`
>
> You can skip the first bullet point if using 1.17 or older
  - Open the `config` folder
  - Open the `openloader` folder
  - Open the `data` folder

### 4. **Copy Datapack:**
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