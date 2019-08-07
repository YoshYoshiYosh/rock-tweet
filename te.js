let asyncFunc = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${time/1000}秒後に動くよ。`)
            resolve()
        }, time)
    })
}

async function main() {
    await asyncFunc(1000)
    console.log('async後だよ')
    console.log(1+1)
}

main()

console.log('やあ。asyncより先に出力されていると思うよ')