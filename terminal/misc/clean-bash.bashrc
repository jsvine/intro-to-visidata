export LANG=en_US.UTF-8
# via https://stackoverflow.com/a/6086978
function promptify {
    local __color="\[\033[38;5;37m\]"
    local __cur_location="" #"\w"
    local __prompt_tail="$"
    local __last_color="\[\033[00m\]"
    export PS1="$__color$__prompt_tail$__last_color "
}

export TERM=xterm-256color
export CLICOLOR=1
promptify
