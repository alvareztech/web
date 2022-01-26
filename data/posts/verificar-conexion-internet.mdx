---
title: Verificar estado de conexión a Internet en tu aplicación Android
summary: Si tu aplicación consume información por Internet, no se te olvide que pueden pasar varias cosas, entre una de ellas es, que el dispositivo no tenga conexión a Internet en ese momento.
tags: [android, java]
language: es
date: 2017-09-01 08:00
---

Si tu aplicación consume información por Internet, no se te olvide que pueden pasar varias cosas, entre una de ellas es, que el dispositivo no tenga conexión a Internet en ese momento.

Aunque muchos lo ignoran es importante mostrar al usuario cuando ocurre esto y no simplemente un error genérico. La buena noticia es que es muy fácil.

## El código

Pedimos permisos para acceder al estado de la conexión. Solicitado (colócalo) en el *AndroidManifest.xml*.

```xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

Luego con el siguiente trozo verificas si estas o no conectado en ese instante.

```java
ConnectivityManager connectivityManager = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
NetworkInfo networkInfo = connectivityManager.getActiveNetworkInfo();

if (networkInfo != null && networkInfo.isConnected()) {
    // Si hay conexión a Internet en este momento
} else {
    // No hay conexión a Internet en este momento
}
```

La lectura es natural, tienes un administrador de conexiones al cual le pides cual es la red actual, para luego preguntar con el método `isConnected()` si estamos conectados.

## Otros métodos

Con la variable de `networkInfo` puedes obtener más información de la conexión.

### Para obtener el estado actual

```java
networkInfo.getState()
```

Retorna el estado actual que puede ser:

* `CONNECTING`
* `CONNECTED`
* `SUSPENDED`
* `DISCONNECTING`
* `DISCONNECTED`
* `UNKNOWN`

### Para obtener el tipo de red a la cual se esta conectado

```java
networkInfo.getType()
```

Te retornará un número que representa al tipo de red al cual estas conectado.

* `ConnectivityManager.TYPE_MOBILE`
* `ConnectivityManager.TYPE_WIFI`
* `ConnectivityManager.TYPE_ETHERNET`
* `ConnectivityManager.TYPE_WIMAX`
* `ConnectivityManager.TYPE_BLUETOOTH`

Entre otros valores.

### Obtener información extra

```java
networkInfo.getExtraInfo()
```

Te puede retornar (como te dice su nombre) alguna información extra, por ejemplo como se llama la red Wi-Fi a la cual estas conectado.

## Un ejemplo

Puedes poner este código en tu activity y comprobar que te muestra, no olvides pedir el permiso mencionado en el *AndroidManifest.xml*.

* [Código](https://gist.github.com/alvareztech/46b9e346477e3a224bbd54164cc2c166)

No olvides que puedes poner este código en un método estático que sea un utilitario para que puedas llamarlo en cualquier parte de tu aplicación. Tus usuarios te lo agradecerán.
