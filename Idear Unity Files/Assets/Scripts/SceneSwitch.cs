using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneSwitch : MonoBehaviour
{
    public void LoadScene(string AR1) 
    {
        SceneManager.LoadScene(AR1);

    }
}
