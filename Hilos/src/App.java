public class App {
    public static void main(String[] args) {

        Proceso1 hilo1 = new Proceso1(); // forma extends Thread

        Thread hilo2 = new Thread(new Proceso2()); // forma implements Runnable

        hilo1.start(); // para arrancar el hilo (crear todo antes de hacerlo)

        hilo2.start();
    }
}
