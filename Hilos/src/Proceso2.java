public class Proceso2 implements Runnable { // implementamos la interfaz runnable

    @Override
    public void run() {
        for (int i = 0; i <= 5; i++) {
            System.out.println("Proceso 2");
        }
    }
}
