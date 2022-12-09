import java.io.*;import java.nio.file.*;import java.util.stream.*;import java.util.*;
interface Day6 {
	static int x(int n,int[]s){return (int)IntStream.range(n,s.length).takeWhile(i->IntStream.range(i-n,i+1).map(j->s[j]).distinct().count()!=n+1).count()+n+1;}
	static void main(String[]a) throws Exception{
		int[] s=Files.readString(new File("input").toPath()).chars().toArray();
		System.out.println(x(3,s)+" "+x(13,s));
	}
}
