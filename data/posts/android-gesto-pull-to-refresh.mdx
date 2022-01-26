---
title: Pull To Refresh en tu lista, RecyclerView en Android
summary: Android tiene el componente nativo para lograr esto, SwipeRefreshLayout.
date: 2017-09-04 08:00
tags: [android, java]
language: es
---

Si tienes una lista en tu aplicación donde se cargan los datos y estos requieran actualización cuando el usuario lo requiera, la opción más popular suele ser hacer un *Pull to Refresh*.

![Pull To Refresh gesture](https://media.giphy.com/media/l378mccLdez0hE6m4/giphy.gif)

En Android no es nada complicado porque tenemos el componente que esta en la librería de soporte, en palabras más sencillas, disponible para todas tus versiones de Android.

El componente se llama [SwipeRefreshLayout](https://developer.android.com/reference/android/support/v4/widget/SwipeRefreshLayout.html) y te muestro como implementarlo.

## Implementación

### Colocarlo en tu diseño XML

Encierra a tu `RecyclerView`, `ListView` o incluso un simple `View` con el tag `android.support.v4.widget.SwipeRefreshLayout` como se muestra:

```xml
<android.support.v4.widget.SwipeRefreshLayout
    android:id="@+id/swipeRefreshLayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <android.support.v7.widget.RecyclerView
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</android.support.v4.widget.SwipeRefreshLayout>
```

Es importante que le pongas un *id* porque necesitamos utilizarlo en tu *activity* o *fragment*.

### Referencia en la activity o fragment

Como lo usarás en varios sitios, es mejor que este como variable global.

```java
private SwipeRefreshLayout swipeRefreshLayout;
```

Lo referencias por su *id* como sabes, como siempre.

```java
swipeRefreshLayout = (SwipeRefreshLayout) findViewById(R.id.swipeRefreshLayout);
```

### Acción cuando se use el gesto

Luego de damos al oyente para que haga algo cuando pase.

```java
swipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
    @Override
    public void onRefresh() {
        // Esto se ejecuta cada vez que se realiza el gesto
        cargarDatos();
    }
});
```

Luego de que carguen los datos o cuando quieras que desaparezca el progreso simplemente usas:

```java
swipeRefreshLayout.setRefreshing(false);
```

Para hacer lo contrario, ya sabes `true` en su lugar.

### Desactivar el gesto

Puedes desactivar el gesto cuando quieras con:

```java
swipeRefreshLayout.setEnabled(false);
```


Y para volverlo a activar simplemente true en su lugar.

### Cambiar colores

Puedes cambiar el color del progreso y el color de fondo.

```java
swipeRefreshLayout.setColorSchemeResources(R.color.colorPrimary);
swipeRefreshLayout.setProgressBackgroundColorSchemeResource(R.color.colorAccent);
```

El primero puede recibir más de un color separado por comas.

## ¿Quieres un ejemplo?

En el siguiente ejemplo creamos un proceso o tarea de ejemplo que tarda 3 segundos para que puedas notar el gesto y la animación.

* [Código](https://gist.github.com/alvareztech/0e1742d661c7dfcf132197f68941f30d)

Eso es todo. Ahora que sabes que existe el componente y sabes como usarlo, colócalo en tus proyectos de forma adecuada.
