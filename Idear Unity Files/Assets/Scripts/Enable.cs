using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enable : MonoBehaviour
{
    public GameObject square;
    void Start()
    {

    }
    void Update()
    {

    }
    public void whenButtonClicked()
    {
        if (square.activeInHierarchy == true)
            square.SetActive(false);
        else
            square.SetActive(true);
    }
}
