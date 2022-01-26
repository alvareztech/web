---
title: "Creación de la aplicación Android: Tres En Raya"
summary: Creación de un juego 3-en-raya (tic-tac-toe, el gato) para dos jugadores locales, que permite la introducción de los nombres de los jugares y cuente con un historial de partidas jugadas.
tags: [android, java]
date: 2016-06-19 08:00
language: es
video.youTube: DFmCrRN4-dQ
---

Creación de un juego 3-en-raya (tic-tac-toe, el gato) para dos jugadores locales, que permite la introducción de los nombres de los jugares y cuente con un historial de partidas jugadas.

> Este video fue grabado en vivo del curso básico de desarrollo de aplicaciones Android el 2016. Algunas cosas pueden haber cambiado y/o desarrolladas de la forma más sencilla posible, aún así, es buena referencia para quienes que inician en Android y/o programación.

__Aprenderás__

* Crear tu primera aplicación Android en Android Studio
* Usar recursos _Material Design_, colores recomendados, etc.
* Crear un adaptador para un `RecyclerView`

## Colores

__Colores para el texto__

* [material.io/guidelines/style/color](https://material.io/design/color/text-legibility.html#legibility-standards)

Colores usados en el vídeo:

```xml
<color name="colorPrimaryText">#DE000000</color>
<color name="colorSecondaryText">#8A000000</color>
<color name="colorDisabledText">#61000000</color>
    
<color name="colorPrimaryDarkText">#FFFFFF</color>
<color name="colorSecondaryDarkText">#B3FFFFFF</color>
<color name="colorDisabledDarkText">#80FFFFFF</color>
```

* [Porcentajes en HEX](https://gist.github.com/alvareztech/b7feab4e6bcdcc3f4253a2b7392c8a21)

__Colores del tema__

* [material.io/guidelines/style/color](https://material.io/guidelines/style/color.html)

Colores usados en el video:

```xml
<color name="colorPrimary">#00BCD4</color>
<color name="colorPrimaryDark">#0097A7</color>
<color name="colorAccent">#FFD740</color>
```

## Dependencias

_Minuto 0:52_

Para usar componentes *Material Design*.

```java
compile 'com.android.support:appcompat-v7:23.4.0'
compile 'com.android.support:design:23.4.0'
compile 'com.android.support:cardview-v7:23.4.0'
compile 'com.android.support:recyclerview-v7:23.4.0'
```

## Diseño

_Minuto 1:05_

__activity_main.xml__

```java
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    tools:context="tech.alvarez.tresenraya.MainActivity">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <EditText
            android:id="@+id/jugador1EditText"
            android:layout_width="0dp"
            android:layout_height="48dp"
            android:layout_weight="1"
            android:hint="@string/jugador1" />

        <EditText
            android:id="@+id/jugador2EditText"
            android:layout_width="0dp"
            android:layout_height="48dp"
            android:layout_weight="1"
            android:hint="@string/jugador2" />

    </LinearLayout>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center_horizontal"
        android:orientation="horizontal">

        <Button
            android:id="@+id/unoButton"
            android:layout_width="80dp"
            android:layout_height="80dp"
            android:onClick="presionar1"
            android:textSize="50sp" />

        <Button
            android:id="@+id/dosButton"
            android:layout_width="80dp"
            android:layout_height="80dp"
            android:onClick="presionar2"
            android:textSize="50sp" />

        <Button
            android:id="@+id/tresButton"
            android:layout_width="80dp"
            android:layout_height="80dp"
            android:onClick="presionar3"
            android:textSize="50sp" />

    </LinearLayout>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center_horizontal"
        android:orientation="horizontal">

        <Button
            android:id="@+id/cuatroButton"
            android:layout_width="80dp"
            android:layout_height="80dp"
            android:onClick="presionar4"
            android:textSize="50sp" />

        <Button
            android:id="@+id/cincoButton"
            android:layout_width="80dp"
            android:layout_height="80dp"
            android:onClick="presionar5"
            android:textSize="50sp" />

        <Button
            android:id="@+id/seisButton"
            android:layout_width="80dp"
            android:layout_height="80dp"
            android:onClick="presionar6"
            android:textSize="50sp" />

    </LinearLayout>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center_horizontal"
        android:orientation="horizontal">

        <Button
            android:id="@+id/sieteButton"
            android:layout_width="80dp"
            android:layout_height="80dp"
            android:onClick="presionar7"
            android:textSize="50sp" />

        <Button
            android:id="@+id/ochoButton"
            android:layout_width="80dp"
            android:layout_height="80dp"
            android:onClick="presionar8"
            android:textSize="50sp" />

        <Button
            android:id="@+id/nueveButton"
            android:layout_width="80dp"
            android:layout_height="80dp"
            android:onClick="presionar9"
            android:textSize="50sp" />

    </LinearLayout>

    <android.support.v7.widget.RecyclerView
        android:id="@+id/historialRecyclerView"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1" />

</LinearLayout>
```

> Si bien se podría usar otros componentes como `GridView` en lugar de varios `LinearLayout`s.

## Activity

_Minuto 5:09_

__Referencias__

```java
private EditText jugador1EdiText;
private EditText jugador2EdiText;

private Button unoButton;
private Button dosButton;
private Button tresButton;

private Button cuatroButton;
private Button cincoButton;
private Button seisButton;

private Button sieteButton;
private Button ochoButton;
private Button nueveButton;

private RecyclerView historialRecyclerView;
```

__onCreate()__

```java
jugador1EdiText = (EditText) findViewById(R.id.jugador1EditText);
jugador2EdiText = (EditText) findViewById(R.id.jugador2EditText);

unoButton = (Button) findViewById(R.id.unoButton);
dosButton = (Button) findViewById(R.id.dosButton);
tresButton = (Button) findViewById(R.id.tresButton);
cuatroButton = (Button) findViewById(R.id.cuatroButton);
cincoButton = (Button) findViewById(R.id.cincoButton);
seisButton = (Button) findViewById(R.id.seisButton);
sieteButton = (Button) findViewById(R.id.sieteButton);
ochoButton = (Button) findViewById(R.id.ochoButton);
nueveButton = (Button) findViewById(R.id.nueveButton);

historialRecyclerView = (RecyclerView) findViewById(R.id.historialRecyclerView);
```

__onClick para los botones__

La acción para los botones se generan automáticamente presionando `Alt+Enter` y escoger la generación del método.

## Acciones

_Minuto 8:21_

__Variable global para detectar si toca X__

```java
private boolean tocaX = true;
```

__Método de un botón__

```java
if (unoButton.getText().toString().equals("")) {
    if (tocaX) {
        unoButton.setText("X");
    } else {
        unoButton.setText("O");
    }
    tocaX = !tocaX;
}
```

## Método gano

_Minuto 10:53_

```java
public boolean gano(String simbolo) {

    boolean siHayGanador = false;

    if (unoButton.getText().equals(simbolo) && dosButton.getText().equals(simbolo) && tresButton.getText().equals(simbolo)) {
        siHayGanador = true;
    }
    if (unoButton.getText().equals(simbolo) && cuatroButton.getText().equals(simbolo) && sieteButton.getText().equals(simbolo)) {
        siHayGanador = true;
    }
    if (unoButton.getText().equals(simbolo) && cincoButton.getText().equals(simbolo) && nueveButton.getText().equals(simbolo)) {
        siHayGanador = true;
    }

    if (cuatroButton.getText().equals(simbolo) && cincoButton.getText().equals(simbolo) && seisButton.getText().equals(simbolo)) {
        siHayGanador = true;
    }

    if (tresButton.getText().equals(simbolo) && seisButton.getText().equals(simbolo) && nueveButton.getText().equals(simbolo)) {
        siHayGanador = true;
    }
    if (sieteButton.getText().equals(simbolo) && ochoButton.getText().equals(simbolo) && nueveButton.getText().equals(simbolo)) {
        siHayGanador = true;
    }

    if (tresButton.getText().equals(simbolo) && cincoButton.getText().equals(simbolo) && sieteButton.getText().equals(simbolo)) {
        siHayGanador = true;
    }

    if (dosButton.getText().equals(simbolo) && cincoButton.getText().equals(simbolo) && ochoButton.getText().equals(simbolo)) {
        siHayGanador = true;
    }
    return siHayGanador;
}
```

## Verificar si ganó

_Minuto 13:30_

__Método verificarSiGano__

```java
public void verificarSiGano(String simbolo) {
    if (gano(simbolo)) {
        Toast.makeText(getApplicationContext(), "Gano " + simbolo + "!!!", Toast.LENGTH_SHORT).show();

        String nombreJugador1 = jugador1EdiText.getText().toString();
        String nombreJugador2 = jugador2EdiText.getText().toString();

        int quienGano = 0;
        if (simbolo == "X") {
            quienGano = 1;
        }
        if (simbolo == "O") {
            quienGano = 2;
        }

        Date fechaActual = Calendar.getInstance().getTime();

        Partida partida = new Partida(nombreJugador1, nombreJugador2, quienGano, fechaActual);

        partidasAdapter.add(partida);

        limpiar();
    }
}
```

## Adapter

_Minuto 14:52_

__Clase Partida__

```java
public class Partida {

    private String nombreJugador1;
    private String nombreJugador2;
    private int quienGano;
    private Date fecha;

    // lo demás se genera con Android Studio
}
```

__Adapter__

```java
public class PartidasAdapter extends RecyclerView.Adapter<PartidasAdapter.ViewHolder> {

    private ArrayList<Partida> dataset;


    public PartidasAdapter() {
        dataset = new ArrayList<>();
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_partida, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        Partida partida = dataset.get(position);

        if (partida.getQuienGano() == 1) {
            holder.tituloTextView.setText(partida.getNombreJugador1());
        } else {
            holder.tituloTextView.setText(partida.getNombreJugador2());
        }

        holder.subtituloTextView.setText(darFormato(partida.getFecha()));
    }

    @Override
    public int getItemCount() {
        return dataset.size();
    }

    public static String darFormato(Date date) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("ddMMMyyyy hh:mm");
        return simpleDateFormat.format(date).toUpperCase();
    }


    public static class ViewHolder extends RecyclerView.ViewHolder {

        TextView tituloTextView;
        TextView subtituloTextView;

        public ViewHolder(View itemView) {
            super(itemView);
            tituloTextView = (TextView) itemView.findViewById(R.id.tituloTextView);
            subtituloTextView = (TextView) itemView.findViewById(R.id.subtituloTextView);
        }
    }

    public void add(Partida partida) {
        dataset.add(partida);
        notifyDataSetChanged();
    }

    public void clear() {
        dataset.clear();
        notifyDataSetChanged();
    }

}
```

## Diseño Item Partida

_Minuto 16:10_

__item_partida.xml__

Aún se deben adicionar los IDs.

```java
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="72dp"
    android:orientation="horizontal"
    android:paddingBottom="8dp"
    android:paddingLeft="16dp"
    android:paddingRight="16dp"
    android:paddingTop="8dp">

    <ImageView
        android:layout_width="24dp"
        android:layout_height="24dp"
        android:layout_gravity="center_vertical"
        android:src="@mipmap/ic_launcher" />

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:gravity="center_vertical"
        android:orientation="vertical"
        android:paddingLeft="32dp"
        android:paddingRight="16dp">

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="@string/app_name"
            android:textColor="@color/colorPrimaryText"
            android:textSize="16sp" />

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="@string/app_name"
            android:textColor="@color/colorSecondaryText"
            android:textSize="14sp" />
    </LinearLayout>

</LinearLayout>
```

## Formato para fechas

_Minuto 17:39_

__Obtener fecha actual__

```java
Date fechaActual = Calendar.getInstance().getTime();
```

__Dar formato a una fecha__

```java
public static String darFormato(Date date) {
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("ddMMMyyyy hh:mm");
    return simpleDateFormat.format(date).toUpperCase();
}
```

## Limpiar

_Minuto 19:52_

__Método limpiar__

```java
private void limpiar() {
    unoButton.setText("");
    dosButton.setText("");
    tresButton.setText("");
    cuatroButton.setText("");
    cincoButton.setText("");
    seisButton.setText("");
    sieteButton.setText("");
    ochoButton.setText("");
    nueveButton.setText("");
}
```

> También puede usarse `setText(null)`

## Código

Código completo de la aplicación:

* [Gist en GitHub](https://gist.github.com/alvareztech/6cc6b66946a6fb6a95678c2e808104e8)
