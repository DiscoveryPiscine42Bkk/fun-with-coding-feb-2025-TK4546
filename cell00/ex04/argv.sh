if [ "$#" -eq 0 ]
then  
    echo "No arguments supplied"
else
    a=1
    for i in "$@"; do
        if [ "$a" -gt 3 ]; then
            break
        fi
        echo "$i"
        ((a++))
    done
fi
