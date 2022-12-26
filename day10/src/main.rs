fn main() {
    let data = std::fs::read_to_string("input").unwrap();
    let signals = [20, 60, 100, 140, 180, 220];
    let mut cycles = Vec::new();
    let mut signal_strength = 0;
    let mut x = 1;
    for instruction in data.lines() {
        match &instruction[0..4] {
            "noop" => {
                cycles.push(x);
            }
            "addx" => {
                let a: i32 = instruction.split(' ').last().unwrap().parse().unwrap();
                cycles.push(x);
                cycles.push(x);
                x += a;
            }
            _ => panic!("Unknown instruction {instruction}"),
        }
    }
    let mut output = Vec::new();
    for (i, c) in cycles.iter().enumerate() {
        if i == 0 || i % 40 == 0 {
            output.push("\n");
            continue;
        }
        if [c - 1, *c, c + 1].contains(&((i % 40) as i32)) {
            output.push("#");
        } else {
            output.push(".");
        }
        if signals.contains(&i) {
            signal_strength += (i as i32) * cycles[i - 1];
        }
    }
    println!("{signal_strength}{}", output.join(""));
}
