{ pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  buildInputs = with pkgs; [
  # RUST
    rustc
    cargo
    rustfmt
    rust-analyzer
    clippy
  # GO
    go
    gotools
    gopls
    go-outline
    gocode
    gopkgs
    gocode-gomod
    godef
    golint
  ];

  RUST_BACKTRACE = 1;
}
