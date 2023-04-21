---
sidebar_position: 1
---




# Apidog Linux 

## Method 1: Open Apidog with Command 

### 1. Add Executable Permissions

```js
chmod a+x Apidog.AppImage
```

### 2. Running

```js
./Apidog.AppImage
```


## Method 2: Open Apidog with the Graphical Interface

### 1. Add Executable Permissions

Right-click "Apidog.AppImage" file-> Select "Properties"-> check execute "allow as program execution file".

### 2. Running

Double-click the execute "Apidog.AppImage" file to run



## FAQ

1. When Ubuntu 22.04 install appimage error, prompt “AppImages require FUSE to run”.

   Solution：Run with the Command: sudo. / package name xxx.AppImage --appimage-extract-and-run --no-sandbox

2. Linux prompt “GPU process isn't usable, Goodbye.”

   Run export APIDOG_DISABLE_GPU='true'. Start it again.