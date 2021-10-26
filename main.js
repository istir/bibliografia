function main() {
    const originalTextElement = document.getElementById("in");
    const outputTextElement = document.getElementById("out");
    const originalText = originalTextElement.value;
    if (originalText.length<1) return;
    
    const split = originalText.split("\n")
    let split1=[]
    for (let i = 0; i < split.length; i+=1) {
        const element = split[i].replace(/(\[[0-9]+\])\s*/,"")
        if(element.length>0) split1.push(element)
    }
   
    const sorted = split1.sort()
    let final = []
    for (let i = 0; i < sorted.length; i+=1) {
    final.push(`[${final.length+1}] `+sorted[i])
    }
    
    outputTextElement.value=final.join("\n")
}

function copy() {
    
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            if(document.getElementById("out").value.length>0)
          navigator.clipboard.writeText(document.getElementById("out").value)
        }
      });
  
}
