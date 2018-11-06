package ca.gc.esdc.iitb;

import java.util.ArrayList;

public class ModuleOne {
    public static Integer[] factorThisNumber(int number) {
        ArrayList<Integer> resultslist = new ArrayList<Integer>();
        for (int i = 1; i <= number; i++) {
            System.out.println(number + "%" + i + " = " + number % i);
            if (number % i == 0) {
                resultslist.add(new Integer(i));
            }
        }

        Integer[] results = new Integer[resultslist.size()];
        resultslist.toArray(results);
        return results;
    }
}