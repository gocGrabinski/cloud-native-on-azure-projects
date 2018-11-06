package ca.gc.esdc.iitb;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertArrayEquals;
import org.junit.Test;

public class ModuleOneTest {

    @Test
    public void factorThisNumberZero() {
        Integer[] results = ModuleOne.factorThisNumber(0);
        Integer[] expected = {};
        assertArrayEquals(expected, results);
    }

    @Test
    public void factorThisNumberOne() {
        Integer[] results = ModuleOne.factorThisNumber(1);
        Integer[] expected = { 1 };
        assertArrayEquals(expected, results);
    }

    @Test
    public void factorThisNumberNine() {
        Integer[] results = ModuleOne.factorThisNumber(9);
        Integer[] expected = { 1, 3, 9 };
        assertArrayEquals(expected, results);
    }

}