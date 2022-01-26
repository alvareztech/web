---
title: Imprimir desde una aplicación JavaFX
summary: Desde Java 8 es posible de una forma muy sencilla realizar impresiones de lo que vemos en una aplicación JavaFX.
tags: [java, javafx]
date: 2017-05-28 08:00
language: es
---

Desde _Java 8_ es posible de una forma muy sencilla realizar impresiones de lo que vemos en una aplicación _JavaFX_.

![](https://firebasestorage.googleapis.com/v0/b/maksha-41f4f.appspot.com/o/labs%2Fjavafx-printing%2FScreen%20Shot%202017-05-31%20at%2019.43.44.png?alt=media&token=7f49d1a9-ae7e-4f69-b761-92e80d557c14)

__Aprenderás__

* Imprimir desde una aplicación JavaFX

__Requisitos__

* Al menos una conexión a una Impresora física o virtual.

## Aplicación JavaFX

Partirás de una aplicación _JavaFX_. Como sabemos una aplicación simple de escritorio _JavaFX_ se ve así:

```java
public class Main extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {

        // Aquí vendrá el nuevo código
        
        Scene scene = new Scene(vBox, 400, 260);
        primaryStage.setScene(scene);
        primaryStage.show();
    }
}
```

El `vBox` lo crearás en el siguiente paso.

## Preparando la interfaz

La aplicación será sencilla, solo tendrá un lugar donde colocar texto en varias líneas, un `TextArea` y botón que se encargará de Imprimir.

```java
TextArea textArea = new TextArea();

Button printButton = new Button("Imprimir");
```

Como la aplicación solo tendrá eso usamos un `VBox` con espacios internos (Spacing) y espacios a los lados (padding) y que estén uno debajo de otro.

```java
VBox vBox = new VBox();
vBox.getChildren().add(textArea);
vBox.getChildren().add(printButton);
vBox.setPadding(new Insets(20, 20, 20, 20));
vBox.setSpacing(20);
```

Si ejecutas la aplicación tendrás algo así:

![](https://firebasestorage.googleapis.com/v0/b/maksha-41f4f.appspot.com/o/labs%2Fjavafx-printing%2FScreen%20Shot%202017-05-31%20at%2019.42.18.png?alt=media&token=6ba73714-c5f2-46b2-ae25-5d40b62e92b9)

## Acción del botón

```java
printButton.setOnAction(new EventHandler<ActionEvent>() {
    @Override
    public void handle(ActionEvent event) {
        imprimir(textArea);
    }
});
```

Y el método `imprimir()` será mas o menos así:

```java
private void imprimir(Node node) {

}
```

`node` representa todo aquello que deseas imprimir, es decir que parte de la aplicación, en otras palabras puedes imprimir un `ListView`, `TextView`, el mismo `VBox`, etc. En este caso imprimiremos directamente el `TextArea`.

## Imprimir

Verás lo sencillo que es:

Un `PrinterJob` como su nombre lo dice es el que se encarga del trabajo de la impresora, es el objeto principal que podemos configurar y el que se encarga de imprimir.

### ¿Cómo se crea uno?

```java
PrinterJob job = PrinterJob.createPrinterJob();
```

Esto puede crear el `PrinterJob` pero pueden haber algunos problemas, no tienes ninguna impresora conectada, etc. por lo tanto es siempre necesario preguntar si es nulo o no, de la siguiente forma:

```java
if (job != null) {
  
}
```

Podrías poner un mensaje por el caso contrario para mostrar al usuario que algo salió mal.

### ¿Qué luego?

Lo que viene es: (dentro del if anterior)

```java
if (job.showPrintDialog(node.getScene().getWindow())) {
    if (job.printPage(node)) {
        job.endJob();
    }
}
```

Tenemos varias opciones para listar las impresoras conectadas al computador, obtener la impresora por defecto, etc.

Una de las formas más adecuadas para tu primera aplicación es mostrar una ventana o diálogo donde aparezcan todas las impresoras, algunas configuraciones y finalmente el botón de imprimir. Eso es lo que hacemos en el código mostrado.

## Uniendo todo

Finalmente tu código debería verse así:

```java
public class Main extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {

        TextArea textArea = new TextArea();

        Button printButton = new Button("Imprimir");

        VBox vBox = new VBox();
        vBox.getChildren().add(textArea);
        vBox.getChildren().add(printButton);
        vBox.setPadding(new Insets(20, 20, 20, 20));
        vBox.setSpacing(20);
        
        printButton.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                imprimir(textArea);
            }
        });

        Scene scene = new Scene(vBox, 400, 260);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    private void imprimir(Node node) {
        PrinterJob job = PrinterJob.createPrinterJob();
        if (job != null) {
            if (job.showPrintDialog(node.getScene().getWindow())) {
                if (job.printPage(node)) {
                    job.endJob();
                }
            }
        }
    }
}
```

Prueba colocando texto dentro del `TextArea` y imprime.

![](https://firebasestorage.googleapis.com/v0/b/maksha-41f4f.appspot.com/o/labs%2Fjavafx-printing%2FScreen%20Shot%202017-05-31%20at%2019.43.59.png?alt=media&token=bfb5b2dc-cc28-47e5-b484-4670ce8ae3d4)

Debería aparecer una pantalla de tu sistema operativo para seleccionar impresora e imprimir: (así se vería en una Mac por ejemplo)

![](https://firebasestorage.googleapis.com/v0/b/maksha-41f4f.appspot.com/o/labs%2Fjavafx-printing%2FScreen%20Shot%202017-05-31%20at%2019.43.44.png?alt=media&token=7f49d1a9-ae7e-4f69-b761-92e80d557c14)

## ¿Algo raro?

Es posible que si imprimes texto este se muestre con símbolos raros, puede deberse por que no especificamos la fuente (tipo de letra) de lo que queremos imprimir.

### ¿Cómo lo arreglamos?

Por ejemplo podríamos hacer que el `TextArea` tenga el tipo de fuente Arial de la siguiente manera.

```java
textArea.setFont(Font.font("Arial"));
```

Puedes colocarlo luego de haber creado el `TextArea`, y puedes usar cualquier otro tipo de letra que tengas en tu computadora, si no tienes Arial (si es Windows) puedes probar otra, Helvetica por ejemplo.
