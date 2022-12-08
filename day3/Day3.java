import java.io.*;import java.nio.file.*;import java.util.stream.*;import java.util.*;
interface Day3 {
	static void main(String[]a) throws Exception {
		String[] s = Files.readString(new File("input").toPath()).split("\n");
		System.out.println(Arrays.stream(s).map(c->new String[]{c.substring(0,c.length()/2),c.substring(c.length()/2)}).mapToInt(c->c[0].chars().filter(d->c[1].indexOf(d)>=0).findFirst().getAsInt()).map(c->c>90?c-96:c-38).sum());
		System.out.println(IntStream.range(0, s.length/3).map(c->c*3).map(i->s[i].chars().filter(d->s[i+1].indexOf(d)>=0&&s[i+2].indexOf(d)>=0).findFirst().getAsInt()).map(c->c>90?c-96:c-38).sum());
	}
}
