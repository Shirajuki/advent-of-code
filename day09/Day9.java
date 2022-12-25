import java.io.*;import java.nio.file.*;import java.util.stream.*;import java.util.*;
interface Day9 {
	static int x(String[] s,int l){
		HashMap<String,String> pos = new HashMap<String,String>();
		pos.put("0.0","");
		int[] rx = new int[l];
		int[] ry = new int[l];
		Arrays.stream(s).forEach(e->{
			String[] a=e.split(" ");
			for(int i=0;i<Integer.valueOf(a[1]);i++){
				switch(a[0].charAt(0)){
					case'L'->rx[0]--;
			        case'R'->rx[0]++;
					case'U'->ry[0]--;
			        case'D'->ry[0]++;
      			}
				for(int j=1;j<l;j++){
					int[] d={rx[j-1]-rx[j],ry[j-1]-ry[j]};
					int[] c={d[0]>0?1:d[0]<0?-1:0,d[1]>0?1:d[1]<0?-1:0};
					if (Math.abs(d[0])>1||Math.abs(d[1])>1){
						rx[j] = rx[j]+c[0];
						ry[j] = ry[j]+c[1];
						pos.put(String.format("%d.%d",rx[l-1],ry[l-1]),"");
					}
				}
			}
		});
		return pos.size();
	}
	static void main(String[]u) throws Exception{
		String[] s=Files.readString(new File("input").toPath()).split("\n");
		System.out.println(x(s,2)+" "+x(s,10));
	}
}
