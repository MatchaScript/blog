FROM docker.io/library/fedora:latest
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID
ENV \
  XDG_CONFIG_HOME=/home/${USERNAME}/.config \
  XDG_DATA_HOME=/home/${USERNAME}/.local/share \
  XDG_CACHE_HOME=/home/${USERNAME}/.cache \
  VOLTA_HOME=/home/${USERNAME}/.local/share/volta \
  NPM_CONFIG_USERCONFIG=/home/${USERNAME}/.config/npm/npmrc

RUN dnf install -y zsh sudo && \
  dnf clean all && \
  useradd ${USERNAME} -G wheel -s /usr/bin/zsh && \
  echo "${USERNAME} ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

USER $USERNAME

RUN sudo dnf update -y && \
  sudo dnf install -y \
  zsh-autosuggestions \
  zsh-syntax-highlighting \
  openssh python3 python3-pip \
  git nano openssl curl && \
  sudo dnf clean all && \
  bash -c "$(curl -fsSL https://get.volta.sh)" -- --skip-setup && \
  curl -sS https://starship.rs/install.sh | sudo sh -s -- -y && \
  sudo rm -rf /tmp/* && \
  ${VOLTA_HOME}/bin/volta install node@latest && \
  rm -rf /home/${USERNAME}/.cache && \
  rm -rf ${VOLTA_HOME}/inventory/node