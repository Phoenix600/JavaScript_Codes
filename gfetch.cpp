#include<Windows.h>
#include<iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    MEMORYSTATUSEX status;
    status.dwLength = sizeof(status);
    GlobalMemoryStatusEx(&status);
    cout<< (int64_t)((status.ullTotalPhys)/(1024*1000000));
    std::cout << "👀" << std::endl;
    return 0;
}
