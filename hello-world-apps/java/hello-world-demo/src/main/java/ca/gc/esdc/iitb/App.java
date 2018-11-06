package ca.gc.esdc.iitb;

import java.util.Calendar;
import java.util.HashMap;
import io.javalin.Javalin;

/**
 * Hello world!
 *
 */
public class App {

    public static void main(String[] args) {
        Javalin app = Javalin.create().start(7000);
        app.get("/", ctx -> {
            HashMap<String, String> aMap = new HashMap<String, String>();
            aMap.put("Greeting", "Hello world from Java.");
            aMap.put("IP-Address", ctx.ip());
            aMap.put("Host", ctx.host());
            aMap.put("Timestamp", Calendar.getInstance().getTime().toString());
            ctx.json(aMap);
        });

        app.get("/factors/:number", ctx -> {
            Integer numberToFactor = ctx.validatedPathParam("number").asInt().getOrThrow();
            ctx.result("Factors for " + ctx.pathParam("number") + " will be returned here !");
        });
    }
}
